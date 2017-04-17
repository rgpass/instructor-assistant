const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(favicon(path.join(__dirname, 'favicon.ico')));

console.log(`⚡⚡  Listening on port: ${port} ⚡⚡`);

app.listen(port);
