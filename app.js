var express = require('express')
var app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs')

app.use(express.static('public'));




app.get('/', (req, res)=>{
res.render('index')
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})

