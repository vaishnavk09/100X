
const greet = (name: string) => {
    console.log("hello " + name);
}

greet("vaish");



interface User {
    name: string;
    age: number;
    adult: boolean;
    skills: string[];

}

let user: User ={
    name: "Vertin",
    age:21,
    adult:true,
    skills:["JavaScript","TypeScript","React"]  
}

console.log(user.name);

type Player = {
    name: string;
    jerseyNumber: number;
    position: string;
    team: string;
    age ?: number;
}

let player: Player = {
    name: "Messi",
    jerseyNumber: 10,
    position: "Forward",
    team: "Barcelona"
    
}

console.log(player.name);
