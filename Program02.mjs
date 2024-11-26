import express from 'express';
import open from 'open';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('¡Hello world, this is a JavaScript program :D !');
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);

  open(`http://localhost:${port}`);
});
