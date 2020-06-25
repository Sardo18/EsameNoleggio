'use strict'

const Car = require('./car');
const db = require('./db');


const createCar = function(row) {
    return new Car(row.id, row.marca, row.modello, row.categoria, row.noleggiata);
}

exports.getCars = function(){
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM Auto";
        db.all(sql, [], (err, rows) => {
        if(err) {
            reject(err);
        } else {
            let cars = rows.map((row) => createCar(row));
            resolve(cars);
        }
        
        });
    });
    
}

exports.getCar = function(id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Auto WHERE ID= ?";
        db.all(sql, [id], (err, rows) => {
            if(err)
                reject(err);
            else if (rows.length === 0)
                resolve(undefined);
            else {
                const car = createCar(rows[0]);
                resolve(car);
            }
        });
    });
}