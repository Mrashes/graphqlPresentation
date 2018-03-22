const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const root = require('./root');
const schema = buildSchema(require('./schema'))

const port = process.env.PORT || 3000

//bodyParser I cant use graph ql
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
	res.render('index', {imgurl: null, error: null});
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(importSchema);


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

app.listen(port, function () {
	console.log('Example app listening on port ' + port + '!');
});
