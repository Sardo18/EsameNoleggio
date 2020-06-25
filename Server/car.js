class Car{
    constructor(id, marca, modello, categoria, noleggiata){
        if(id)
            this.id = id;
        
            this.marca = marca;
            this.modello = modello;
            this.categoria = categoria;
            this.noleggiata = noleggiata;
    }
}

module.exports = Car;