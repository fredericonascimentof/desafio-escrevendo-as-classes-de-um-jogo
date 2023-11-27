// User data input 
const input = require('readline-sync');

// Hero stats
class Hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    // Hero and attack type
    attack() {

        if (this.type === 'warrior') {
            this.type = 'longsword';

        } else if (this.type === 'mage') {
            this.type = 'spell'

        } else if (this.type === 'monk') {
            this.type = 'martial arts'

        } else if (this.type === 'ninja') {
            this.type = 'shuriken'

        } else if (this.type === 'archer') {
            this.type = 'bow'

        } else if (this.type === 'thief') {
            this.type = 'dagger'

        } else if (this.type === 'warlock') {
            this.type = 'axe'

        } else if (this.type === 'necromancer') {
            this.type = 'raise dead'

        } else if (this.type === 'bard') {
            this.type = 'awesome guitar solo'

        } else if (this.type === 'paladin') {
            this.type = 'sword'

        }

    }

    // Hero's attack
    const attack = Math.floor(Math.random() * 10) + 1;



        // Output is the attack executed by the hero 
        console.log(`The ${this.type} attacked using ${ this.name }`);

    }   

}

// A loop must run so the user can create an indeterminate number of heroes
do {
    
    // Hero's name
    const name = input.question('Type the name of the hero: ');
    // Hero's age
    const age = input.question('Type his age: ');
    // Hero's type 
    const type = input.question('Type his type: ');
    
    // Assign values to user data input
    const hero = new Hero(name, age, type.toLowerCase());
    hero.attack();
    
    // Ask if the user wants to create another hero
    const answer = input.question('Do you want to create another hero? (y/n) ');
    
    // If the user wants to create another hero, the loop will run again
    if (answer === 'y'){
        continue;
    }else if (answer === 'n'){
        break;
    }
}while(true);



