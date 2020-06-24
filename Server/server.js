const express = require('express');
const carDao = require('./car_dao');
const userDao = require('./user_dao');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const jwtSecret = '6xvL4xkAAbG49hcXf5GIYSvkDICiUAR6EdR5dLdwW7hMzUjjMUe9t6M5kSAYxsvX';
const expireTime = 300; 
const authErrorObj = { errors: [{ 'param': 'Server', 'msg': 'Authorization error'}] };

//create application
const PORT = 3001;
app = new express();

//Logging
app.use(morgan('tiny'));
app.use(express.json());


//GET /cars
app.get('/api/Car', (req, res) => {
    carDao.getCars()
    .then((cars) => {
        res.json(cars);
    })
    .catch((err) => {
        res.status(500).json({errors: [{'msg': err}],
    });
    });
});

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));