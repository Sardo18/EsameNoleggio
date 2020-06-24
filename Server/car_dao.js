'use strict';

const Car = require('./car');
const db = require('./db');

const createCar = function (row) {
    return new Car(row.id, row.marca, row.modello, row.categoria);
}

exports.getCars = function() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Auto Where Noleggiata = No";
        db.all(sql, [], (err, rows)=> {
            if (err){
                reject(err);
            } else {
                let cars = rows.map((row)=> createCar(row));
                resolve(cars);
            }
        });
    });
}