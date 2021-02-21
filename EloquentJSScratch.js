// let rabbit = {};
// rabbit.speak = function(line){
//     console.log(`The Rabbit says '${line}'`);
// };

// rabbit.speak("I'm ALive");

// function speak(line){
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = {type:"white", speak};
// let hungryRabbit = {type: "hungry", speak};

// whiteRabbit.speak("Oh my ears and whiskers, " + "How late it's getting!");

// speak.call(hungryRabbit, "burp!"); //.call takes first argument as 'this'

//functions called with function(){} cannot see the this binding around them, but arrow functions can.

// function normalize(){
//     console.log(this.coords.map(n => n/ this.length));
// }

// normalize.call({coords: [0,2,3], length: 5});

// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}`);
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("KILLLLL!");

//prototypes in javascript can be related to classes, instance of a class is one instance of a prototype

//constructor function:

// function Rabbit(type){
//     this.type = type;
// }

//by convention constructors are capitalized to differentiate them from other functions.
// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} Rabbit says '${line}`);
// }

// let weirdRabbit = new Rabbit("weird");

// weirdRabbit.speak("Whats Up Doc?")

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

//class notation

class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

blackRabbit.speak("I am Black!");

//class declarations only allow methods to be added to the prototype.

export default Rabbit;