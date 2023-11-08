class Tamagotchi {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.health = 50;
        this.hunger = 50;
        this.happiness = 50;
        this.cleanliness = 50;

    }

    get happinessScore() {
        console.log(`${this.name} happiness score is ${this.happiness}`)
        return this.happiness;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I'm a ${this.gender}`);
        this.happiness += 5;
        return this
    }

    eats() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} has eaten. ${this.name}'s health is now ${this.health}`);
        return this;
    }

    naps() {
        this.happiness += 20
        this.health += 10
        console.log(`${this.name}'s health is now ${this.health}. ${this.name}'s happiness is ${this.happiness}`);
        return this;
    }

    play() {
        this.happiness += 10;
        this.cleanliness -= 10;
        console.log(`${this.name}'s happiness is now ${this.happiness}. ${this.name}'s cleanliness is ${this.cleanliness}`);
        return this;
    }

    stats() {
        return console.table({
            name: this.name, age: this.age, gender: this.gender, health: this.health, hunger: this.hunger, happiness: this.happiness, cleanliness: this.cleanliness
        });

    }
}

class TamagotchiFox extends Tamagotchi {
    constructor(name, happiness, hunger) {
        super(name, happiness, hunger);
        this.PreyEaten = 0
    }
    eatPrey() {
        this.PreyEaten += 1;
        this.happiness += 1000;
        this.hunger -= 50;
        console.log(`${this.name} is happy`);
        return this;
    }

}

class TamagotchiV2 extends Tamagotchi {
    constructor(name, happiness, health) {
        super(name, happiness, health);
        this.children = 0;
        this.friends = 0;

    }
    reproduce() {
        this.children += 1;
        this.happiness += 100;
        this.health -= 50
        console.log(`${this.name} has ${this.children} child/children`);
        return this;
    }

    makeFriend() {
        this.friends += 1;
        this.happiness += 50;
        console.log(`${this.name} has ${this.friends} friend/friends`);
        return this;
    }


}

const mimi = new Tamagotchi("Mimi", 12, "female");
mimi.play();
mimi.stats()
const mimiV2 = new TamagotchiV2("Mimi", 12, "female").reproduce().stats();

const larry = new TamagotchiFox("larry", 5, "male");
larry.eatPrey().stats();
const isHappy = larry.happinessScore;
console.log(isHappy);

