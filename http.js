const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// app.use(bodyParser.json()); // bodyParser is librery to get body

// app.get('/', function(req, res) {
//   res.send('hello world');
// })

// app.post('/conversations', function(req, res) {
//   const message = req.body.message;  // i can use it to get user send body
//   console.log(message);
// })

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + 1;
  }
  return ans;
}

app.get("/", function(req, res) {
  const n = req.query.n;  // query is parameter that take input form user like [ http://localhost:3000/?n=10 ]
  const ans = calculateSum(n);
  res.send(ans.toString());
})

app.listen(port);