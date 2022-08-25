const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const url = require('url');
const expressLayouts = require('express-ejs-layouts');
const pageRouter = require('./routes/pagerouter');

// config dotenv

dotenv.config();

// dotenv in const varible
const port = process.env.PORT || 4000;

const app = express();

// use app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layouts/app');
app.use(express.static('public'));
app.use(pageRouter);

// ejs init

app.listen(port, () => {
  console.log(`server running on port ${port}`.bgMagenta);
});
