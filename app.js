const express = require('express');
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  // const a = req.query.a;
  // const b = req.query.b;

  const { a, b } = req.query;




  res.send(`The sum of ${a} and ${b} is ${parseInt(a) + parseInt(b)}`)
})

app.listen(8000, () => {
  console.log('Express server is listening on server 8000')
})