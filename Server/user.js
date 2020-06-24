class User {
    constructor(id, name, surname, email, age, trust, hash){
        if(id)
            this.id = id; 
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
        this.trust = trust;
        this.hash = hash;    
    }
}

module.exports = User;