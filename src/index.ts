import express from 'express';
const app = express();
const port = 5000;
app.get('/home', (_, res) => {
  res.status(200).send('I am here');
});
app.listen(port, () => console.log(`Running on port ${port}`));
