const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const {
  usr,
  host,
  database,
  password,
  portnum,
} = require('./secureConfig/db_config');
const pool = new Pool({ usr, host, database, password, portnum });

const app = express();
const port = 3500;

app.use(
  cors({
    allowedHeaders: [
      'X-Requested-With',
      'Content-Type',
      'Authorization',
      'origin',
      'X-Custom-Header',
    ], // headers that React is sending to the API
    exposedHeaders: [
      'X-Requested-With',
      'Content-Type',
      'Authorization',
      'origin',
      'X-Custom-Header',
    ], // headers that you are sending back to React
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  })
);

const auth = require('./routes/auth');
const user = require('./routes/usr');
const admin = require('./routes/admin');
const label = require('./routes/label');

app.use('/auth', auth);
app.use('/user', user);
app.use('/admin', admin);
app.use('/label', label);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening on port ${port}...`));
