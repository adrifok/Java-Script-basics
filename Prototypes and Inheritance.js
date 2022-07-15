//JAVA SCRIPT PROTOTYPE AND INHERITANCE
/* EVERYTHING in JS is an Object*/
const array = [1, 2, 3]
//console.log(array) //[1, 2 ,3]
//console.log(Object.getPrototypeOf(array));//[]

/*At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt
to search beyond the end of the chain results in null.
If you look for the prototype of an array, a function, or a string, you' ll see it's an object. And that's because in JavaScript
all objects are descendants or instances of Object.prototype, wich is an object that set properties and methods to all other
JavaScript data types.*/
const arr = [1, 2, 3]
const arrProto = Object.getPrototypeOf(arr);
//console.log(Object.getPrototypeOf(arrProto)); //{}
//if we try to look into the prototype 
//console.log(Object.getPrototypeOf(objectProto));//[Object: null prototype] {} by definition null has no prototype

//JAVASCRIPT CLASSES
/*Classes are a way to set a blueprint to create objects with predefined properties and methods.
By creating a class with specific properties and methods, you can later on instantiate objects 
from that class, that will inherit all the properties and methods that that class has. */

class Alien{
    constructor (name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = 'alien'
    }
    fly = () => console.log ('zzzzzzzziiiiinnnnmm!!')
    sayPhrase = () => console.log(this.phrase);
}
    //then we can instantiate an object  from that class like:
    const alien1 = new Alien('Ali', 'I am Ali the alien!');

/*the same thing we did previously defining a class, we can do it by defining a function and editing the prototype in the 
    following way: */
function Aliens (name, phrase){
    this.name = name;
    this.phrase = phrase;
    this.species = 'alien'
}
    Aliens.prototype.fly = () => console.log ('gggggfffffrrrrqqq!!')
    Aliens.prototype.sayPhrase = () => console.log(this.phrase)
/*any function can be invoked as a constructor with the keyword 'new' and the prototype property of that 
functions is used for the object to inherit methods from.*/ 
    const alien2 = new Aliens('Ali', 'I am Ali the alien!');

console.log(alien2);//Aliens { name: 'Ali', phrase: 'I am Ali the alien!', species: 'alien' }
console.log(alien2.name) //Ali
console.log(alien2.phrase)//I am Ali the alien!
alien2.fly(); //gggggfffffrrrrqqq!! 




