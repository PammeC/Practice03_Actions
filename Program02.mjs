import express from 'express';
import open from 'open';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send(`
    <h1>¡Hello world, this is a JavaScript program :D!</h1>
    <h1>CD Deployment of DevOps Actions 🚀</h1>
    <p>This is a Node.js program that demonstrates how to automate a continuous integration and deployment (CI/CD) workflow with GitHub Actions.</p>

  `);
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);

  open(`http://localhost:${port}`);
});