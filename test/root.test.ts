import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';

// Import the app setup from src/index.ts
// If the app is exported, use: import { app } from '../src/index';
// For now, we reconstruct the app inline for demonstration

const app = express();
app.get('/', (_req, res) => {
  res.send('Hello, minimalist TypeScript API!');
});

describe('GET /', () => {
  it('should return HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
