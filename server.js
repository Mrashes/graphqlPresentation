const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const root = require('./root')(graphqlData);
const schema = buildSchema(require('./schema'))

const port = process.env.PORT || 3000

//bodyParser I cant use graph ql
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
	res.render('index', {imgurl: null, error: null});
});

// todoList Routes
app.get('/hello', function (req, res){
  res.send('world')
})

//pass diceFace, diceNum as querys to roll dice
app.get('/dice', function (req, res){
  const array = [];
  for (let i=0; i<req.query.diceNum; i++) {
    array.push(1 + Math.floor(Math.random() * (req.query.diceFace || 6)));
  }
  console.log(req.query.diceFace, 'diceFace');
  console.log(req.query.diceNum, 'diceNum');
  res.send(req.query);
})

app.get('/allMessages', function (req, res) {
  res.send('This would have the full fakeDatabase if I code it in')
})


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

app.listen(port, function () {
	console.log('Example app listening on port ' + port + '!');
});
