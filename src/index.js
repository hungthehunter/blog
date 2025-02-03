const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require("method-override");
const app = express();
const helpers = require('./helpers/handlebars')
const port = 3000;

const { create } = require('express-handlebars');
const db = require('./config/db');
const route = require('./routes')

// Connect to DB
db.connect();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
const exphbs = create({ 
  extname: '.handlebars',
  helpers: helpers,
 });
app.use(methodOverride("_method"));
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));

// HTTP logger
app.use(morgan('combined'));

// route
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
