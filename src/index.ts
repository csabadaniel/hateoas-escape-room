import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello!');
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { app };
