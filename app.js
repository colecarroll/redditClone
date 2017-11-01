var express = require('express')
var app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./db/queries');

app.set('view engine', 'hbs')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())



app.get('/', (req, res)=>{
  queries.getLinks()
  .then(links => {
    console.log(links)
res.render('index', { links: links})
  })
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})

