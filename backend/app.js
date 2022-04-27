const express = require('express');
const bodyParser =  require('body-parser');

const {Pool} = require('pg');
const {user, host, database, password, portnum} = require('./secureConfig/db_config');
const pool = new Pool({user, host, database, password, portnum});

const app = express();
const port = 3500;

const auth = require('./routes/auth');
const usr = require('./routes/usr');
const admin = require('./routes/admin');
const label = require('./routes/label');

app.use('/auth', auth);
app.use('/usr', usr);
app.use('/admin', admin);
app.use('/label', label);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => console.log(`Listening on port ${port}...`));