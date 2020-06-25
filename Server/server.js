const express = require('express');
const dao = require('./car_dao');
const morgan = require('morgan');


//create application
app = new express();
const PORT = 3001;

app.use(morgan('tiny'));

app.use(express.json());

//REST API endpoints

//GET /cars
app.get('/api/cars', (req, res)=> {
    dao.getCars(req.query.filter).then((cars) => {
        res.json(cars);
    })
    .catch((err) => {
        res.status(500).json({
            errors: [{'msg': err}],
        });
    });
});

//GET /cars/<carId>
app.get('/api/cars/:carId', (req, res) => {
    dao.getCar(req.params.carId)
    .then((course) => {
        if(!course){
            res.status(404).send();
        } else{
            res.json(course);
        }
    })
    .catch((err) => {
        res.status(500).json({
            errors: [{'param': 'Server', 'msg': err}],
        });
    });
});

app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));