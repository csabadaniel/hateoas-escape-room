import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index';

describe('GET /', () => {
  it('should return HTTP 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
