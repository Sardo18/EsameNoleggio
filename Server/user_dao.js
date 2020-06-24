'use strict';

const User = require('./user');
const db = require('./db');
const bcrypt = require('bcrypt');

const createUser = function (row) {
    const id = row.id;
    const name = row.name;
    const surname = row.surname;
    const email = row.email;
    const age = row.age;
    const trust = row.trust;
    const hash = row.hash;

    return new User(id, name, surname, email, age, trust, hash);
}

exports.getUser = function(email){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM User WHERE email = ?"
        db.all(sql, [email], (err, rows) => {
            if(err)
                reject(err);
            else if (rows.length === 0)
                resolve(undefined);
            else{
                const user = createUser(rows[0]);
                resolve(user);
            }
        });
    });
}

exports.getUserById = function(id){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM User WHERE id = ?"
        db.all(sql, [id], (err, rows) => {
            if(err)
                reject(err);
            else if (rows.length === 0)
                resolve(undefined);
            else{
                const user = createUser(rows[0]);
                resolve(user);
            }
        });
    });
}

exports.checkPassword = function(user, password){
    console.log("hash of: " +password);
    let hash = bcrypt.hashSync(password, 10);
    console.log(hash);
    console.log("DONE");

    return bcrypt.compareSync(password, user.hash);
}
