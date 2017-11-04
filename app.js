var express = require('express')
var app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./db/queries');
const methodOverride = require('method-override')

app.set('view engine', 'hbs')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))



app.get('/', (req, res)=>{
  queries.getLinks()
  .then(links => {
res.render('index', { links: links})
  })
})

app.get('/addlink', (req, res)=>{
  res.render('addlink')
})

app.post('/addlink', (req, res, next)=>{
  queries.addLink(req.body)
  .then(link =>{
    console.log(link);
    res.redirect('/')
  })
})

app.get('/comments/:id', (req, res, next)=> {
  const id = req.params.id;
  queries.getComments(id, req.body)
  .then(commentData => { console.log(commentData)
    res.render('comments', { comments: comments})
  })
})

app.patch('/:id', (req, res, next) => {
  // console.log('Hello');
  const id = req.params.id;
	queries.upVote(id, req.body)
		.then(linkData => {
    res.redirect('/')
  })
		.catch(err => next(err));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})

