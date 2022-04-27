const express = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
const saltRouds = 2;
const router = express.Router();

router.use(express.json());

//display all customers
router.get('/customers', (request, response) => {
    pool.query('SELECT * FROM customer', (err, res) => {
        if (err)
            console.log(err);

        response.json(res.rows);
    });
});

//display all available vendors
router.get('/labels', (request, response) => {
    pool.query('SELECT * FROM label', (err, res) => {
        if (err)
            console.log(err);

        response.json(res.rows);
    });
});

//add label 
router.post('/labels', (request, response) => {
    const{label_name, email_ID, password} = request.body;

    pool.query('SELECT * FROM label WHERE label_name = $1', [label_name], (error, res) => {
        if (error)
            console.log(error);

        if (res.rows.length === 0)
        {
            bcrypt.hash(password, saltRouds, (err, hash) => {
                if (err)
                    console.log(err);

                console.log(hash);

                pool.query('INSERT INTO label(label_name, email_ID, pwd) VALUES ($1, $2, $3)', [label_name, email_ID, hash], (err, data) => {
                    if (err)
                        console.log(err);
                });
            });
        }

        else
            console.log('Label already exists');
    });
});

//remove vendor
router.delete('/remove', );

module.exports = router;