class Animal {
    constructor (type = 'animal') {
        this.type = type
    }

    get type() {
        return this._type
    }

    set type(val) {
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log("Making animal sound")
    }
}



let Noah = new Animal()

console.log(Noah.type)

class Cat extends Animal {
    constructor() {
        super('cat');
    }

    makeSound(){
        super.makeSound()
    }
}


let Kakashi = new Cat()

console.log(Kakashi.makeSound())

