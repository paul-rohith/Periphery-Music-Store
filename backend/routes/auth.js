const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
const saltRouds = 2;
const router = express.Router();

router.use(express.json());

//routes prepended with '/auth'
router.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

function validUser(user) {
  /*const mail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ph_num = /^[0-9]{10}$/;

  const validEmail = mail.test(String(user.email_ID).toLowerCase());
  const validPassword =
    typeof user.pwd == 'string' &&
    user.pwd.trim() != '' &&
    user.pwd.trim().length >= 6;
  const validPhNum = ph_num.test(String(user.phone_num));

  console.log(user.email_ID);
  console.log(user.pwd);
  console.log(user);
  return validEmail && validPassword && validPhNum;*/
  return true;
}

router.post('/signup', (req, res) => {
  const { email_ID, pwd, first_name, last_name, phone_num, address_customer } =
    req.body;

  if (validUser(req.body)) {
    pool.query(
      'SELECT * FROM customer WHERE email_ID = $1',
      [email_ID],
      (error, resp) => {
        if (error) console.log(error);

        if (resp.rows.length === 0) {
          bcrypt.hash(pwd, saltRouds, (err, hash) => {
            if (err) console.log(err);

            console.log(hash);
            pool.query(
              'INSERT INTO customer (email_ID, pwd, first_name, last_name, phone_num, address_customer) VALUES ($1, $2, $3, $4, $5, $6)',
              [
                email_ID,
                hash,
                first_name,
                last_name,
                phone_num,
                address_customer,
              ],

              (er, res) => {
                if (er) return er;
              }
            );
          });
          res.json({
            message: 'Successfully registered! Redirecting to login page',
          });
          console.log('Successfully registered! Redirecting to login page');
          //res.res.redirect('/auth/login');
        } else res.json({ message: 'Email already taken' });
        //console.log(resp);
      }
    );
  } else res.json({ message: 'Invalid email/password' });
});

router.post('/login', (req, res, next) => {
  const { email_ID, password, role } = req.body;

  if (role === 'customer') {
    //if (validUser(req.body)) {
    pool.query(
      'SELECT * FROM customer WHERE email_ID = $1',
      [email_ID],
      (error, resp) => {
        if (error) return next(error);

        if (resp.rows.length !== 0) {
          // console.log(resp.rows);
          // console.log(resp.rows[0].password);
          // console.log(password);

          bcrypt.compare(password, resp.rows[0].pwd).then((result) => {
            if (result) {
              res.status(200);
              res.json(resp.rows);
            } else {
              //res.status(400);
              res.json({ status: 400, message: 'Invalid login' });
            }
          });
        } else {
          res.status(401);
          res.json({ status: 401, message: 'No user found' });
        }
      }
    );
    //   } else {
    //     res.status(401);
    //     res.json({ message: 'Invalid email/password' });
    //   }
  } else if (role === 'label') {
    //if (validUser(req.body)) {
    pool.query(
      'SELECT * FROM label WHERE email_ID = $1',
      [email_ID],
      (error, resp) => {
        if (error) return next(error);

        if (resp.rows.length !== 0) {
          // console.log(resp.rows);
          // console.log(resp.rows[0].password);
          bcrypt.compare(password, resp.rows[0].pwd).then((result) => {
            if (result) {
              res.json({ status: 200, message: 'Successful login' });
            } else {
              res.json({ status: 400, message: 'Invalid login' });
            }
          });
        } else {
          res.json({ status: 401, message: 'No user found' });
        }
      }
    );
    //   } else {
    //     res.status(402);
    //     res.json({ message: 'Invalid email/password' });
    //   }
  } else if (role === 'admin') {
    console.log(req.body);
    //if (validUser(req.body)) {
    pool.query(
      'SELECT * FROM admin WHERE email_ID = $1',
      [email_ID],
      (error, resp) => {
        if (error) return next(error);

        if (resp.rows.length !== 0) {
          console.log(resp.rows);
          console.log(resp.rows[0].pwd);
          bcrypt.compare(password, resp.rows[0].pwd).then((result) => {
            if (result) {
              if (result) {
                res.json({ status: 200, message: 'Successful login' });
              }
            } else {
              res.json({ status: 400, message: 'Invalid login' });
            }
          });
        } else {
          res.json({ status: 401, message: 'No user found' });
        }
      }
    );
    //   } else {
    //     res.status(402);
    //     res.json({ message: 'Invalid email/password' });
    //   }
  }
});

router.get('/login', (req, res) => {
  res.json({ message: 'Login page' });
});

module.exports = router;
