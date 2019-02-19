const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  // const a = req.query.a;
  // const b = req.query.b;
  const { a, b } = req.query;

  res.send(`The sum of ${a} and ${b} is ${parseInt(a) + parseInt(b)}`)
})

app.get('/cipher', (req,res) => {

  const { text, shift } = req.query;

  let results = ''

  for (let i=0; i<text.length; i++) {
    results += String.fromCharCode(text.charCodeAt(i) + parseInt(shift));
  }
  res.send(results);
})

app.get('/lotto', (req,res) => {

  const arr = req.query.arr;
  let results = 0;
  const lotto = (() => {
    let lottoArray =[];
    for (let i=0;i<6;i++) {
      lottoArray.push(Math.ceil(Math.random()*20))
    }
    return lottoArray; 
  })();
  
  arr.forEach((num) => {
    
    const index = lotto.findIndex(lottoNum => lottoNum === parseInt(num));
    
    if (index !== -1) {
      
      lotto.splice(index, 1, 'words');
      results ++;
      
    } 
  })

  let resultsString = '';

  switch(results){
    case 4:
    resultsString = 'Congratulation you win a free ticket!'
    break;
    case 5:
      resultsString = 'Congratulations! You win $100!'
      break;
    case 6:
      resultsString = 'Wow! Unbelievable! You could have won the mega millions!'
      break;
    default:
      resultsString = 'Sorry, you lose'
      break;
  }
  res.send(resultsString);
})

app.listen(8000, () => {
  console.log('Express server is listening on server 8000')
})