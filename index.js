const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET /
app.get('/', (req, res) => {
  res.send(`Congratulations! Your Express server is running on port ${port}`);
});

// GET /dummy-get
app.get('/dummy-get', (req, res) => {
  res.json({ message: 'This is a dummy GET API' });
});

// POST /dummy-post
app.post('/dummy-post', (req, res) => {
  const { body } = req;
  console.log('Received body:', body);
  res.json({
    message: `This is a dummy POST API, you sent: ${JSON.stringify(body)}`,
  });
});

// Jalankan server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
