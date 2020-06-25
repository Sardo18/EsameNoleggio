import Car from './Car';
const baseURL = "/api";

async function getCars() {
    let url = "/cars";

    const response = await fetch(baseURL + url);
    const carsJson = await response.json();
    if(response.ok){
        return carsJson.map((c) => new Car(c.id, c.marca, c.modello, c.categoria, c.noleggiata));
    } else {
        throw carsJson;
    }
}

const API = { getCars };
export default API;

