import Car from './Car';
const baseURL = "/api";

async function isAuthenticated() {
    let url = "/user";
    const response = await fetch(baseURL + url);
    const userJson = await response.json();

    if(response.ok){
        return userJson;
    } else {
        let err = {status: response.status, errObj: userJson};
        throw err;
    }
}

async function getCars() {
    //let url = "/cars";

    const response = await fetch(baseURL);
    const carsJson = await response.json();
    if(response.ok){
        return carsJson.map((c)=> new Car(c.id, c.marca, c.modello, c.categoria, c.noleggiata));
    } else {
        let err = {status: response.status, errObj: carsJson};
        throw err;
    }
}

async function userLogin(username, password) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password}),
        }).then((response) => {
            if(response.ok){
                response.json().then((user)=> {
                    resolve(user);
                });
            } else {
                response.json()
                .then((obj) => { reject(obj);})
                .catch((err)=> { reject({errors: [{param: "Application", msg: "Cannot parse server response"}]})});
            }
        }).catch((err)=> {reject({errors: [{param: "Server", msg: "Cannot communicate"}]})});
    });
}

async function userLogout(username, password) {
    return new Promise((resolve, reject) => {
        fetch(baseURL + '/logout', {
            method: 'POST',
        }).then((response) => {
            if(response.ok){
                resolve(null);
            } else {
                response.json()
                .then((obj) => { reject(obj); })
                .catch((err) => {reject({ errors : [{ param: "Application", msg: "Cannot parse server response"}]})});
            }
        });
    });
}

const API = { isAuthenticated, getCars, userLogin, userLogout};
export default API;