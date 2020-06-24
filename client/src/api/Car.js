class Car{
    constructor(id, marca, modello, categoria, noleggiata){
        if(id)
            this.id = id;
        
            this.marca = marca;
            this.modello = modello;
            this.categoria = categoria;
            this.noleggiata = noleggiata;
    }

    static from(json){
        const c = Object.assign(new Car(), json);
        return c;
    }
}

export default Car;