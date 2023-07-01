const express = require('express')
const cors = require('cors')
const app = express()
let temp = 15;

app.use(cors());
app.use(express.json());

app.get('/temperature', (req, res) => {
  res.json(temp);
})

app.post('/temperature', (req, res) => {
  temp = req.body.temp;
  res.json(temp);
})

app.listen(5000, () => {
  console.log('Server is running...')
})