interface People {
    name: string;
    age: number;
    greet(): string;
}

class Manager implements People{
    name: string;
    age: number;

    constructor(name: string, age: number){this.name = name; this.age = age;}

    greet(): string{
        return "hello "+this.name+" you are "+this.age+" years old";
    }
}


let manager = new Manager("jaiyaish",26);

console.log(manager.greet());
