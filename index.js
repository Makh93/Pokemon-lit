//! Pokemon Lite

//? functionality
//You should have a Pokemon class that creates new pokemon that have name, health, magic and a bunch of skills (the skills can be stored in an array or object).

class Pokemon {
  constructor(name, health, magic, points, level) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.points = points;
    this.skills = [];
    this.level = level;
  }
  //! LEARN ATTACK SKILL
  //A pokemon has no skills when created. It has to use the method learnAttackSkill to learn a new skill. learnAttackSkill should take an attack object as an argument. The specific attacks should be created using the AttackSkill constructor function, and then internally added to that Pokemon's skills array.
  learnAttackSkill(skill) {
    this.skills.push(skill);
  }

  //! METHOD SHOW-STATUS!
  //Your pokemon should have a method called showStatus that console.logs its status (how much health, magic left)
  showStatus() {
    console.log(
      `${this.name} has  health:${this.health}   magic:${this.magic}   points:${this.points} and  Level:${this.level} `
    );
  }

  //! METHOD ATTACK
  //Your pokemon should have a method called attack which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possibilities in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should call one of the Pokemon's attack and apply it to the other Pokemon. So for example, if you call the lightning attack (which we created above), it should deal 40 damage to the other Pokemon, and deplete 30 magic from the Pokemon that committed the attack. The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack. The attack method should take in two arguments: the index (or key) of the attack to be used, and the Pokemon object that needs to be attacked.

  attack(indexOfSkills, pokemonAttacked) {
    // variables for conditions made.
    const skill = this.skills[indexOfSkills];
    const damage = (pokemonAttacked.health -= skill.damage);
    const pointsGnd = (this.points += skill.damage);
    let healthGiven = 30;
    const gainedHealth = (this.health += healthGiven);
    let level = 0;
    let levelGained = (level += ++this.level);

    // condition for Launching an Attack and gaining Points!
    if (this.magic > skill.magic) {
      this.magic -= skill.magic;

      console.log(
        `${this.name} launched skill ${skill.name} successfully! ${pokemonAttacked.name} got ${skill.damage} damage.`
      );
      console.log(`${skill.damage} points gained by ${this.name}`);
    } else {
      console.log(`${this.name} does not enough magic, cannot launch attack!`);
    }

    // Remaining Health!
    if (pokemonAttacked.health > 0) {
      console.log(
        `${pokemonAttacked.name} has only ${pokemonAttacked.health} health remaining`
      );
    }

    // CONDITION for Attacking and Killing
    if (damage >= skill.damage) {
      console.log(`${pokemonAttacked.name} was Attacked!`);
    } else if (pokemonAttacked.health < 30) {
      console.log(`${pokemonAttacked.name} is dead.`);
    }
    // Level-Up condition!
    if (pointsGnd >= 50) {
      console.log(`${this.name} went up to Level: ${levelGained}`);
    } else {
      console.log(`${this.name} require more points to Level-up`);
    }
    // Points Gained to increase Magic condition
    if (pointsGnd >= damage) {
      return this.getMagic();
    }

    // point and Magic Conditions to gain HeALTH!
    if (pointsGnd >= 25 || this.magic >= 150) {
      console.log(`${this.name} gained health ${gainedHealth}!`);
    }
  }

  //! getMagic Method!
  getMagic() {
    const magic = 40;
    let result = (this.magic += magic);
    console.log(`${this.name} got ${result} magic  back`);
  }
}

//! CLASS ATTACK SKILL
//You should have an AttackSkill class for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemon. Each individual pokemon has a specific set of attacks. The AttackSkill class should take in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires.

class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic
let pikachu = new Pokemon("pikachu", 120, 80, 0, 0);
let bulbasaur = new Pokemon("bulbasaur", 95, 105, 0, 0);
let abra = new Pokemon("Abra", 150, 60, 0, 0);
let altaria = new Pokemon("Altaria", 85, 90, 0, 0);
let Charizard = new Pokemon("Charizard", 120, 100, 0, 0);

//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("lightning", 40, 30);
let speedBolt = new AttackSkill("Speed Bolt", 50, 15);
let venom = new AttackSkill("venom", 45, 35);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let auraBreak = new AttackSkill("Aura Break", 50, 90);
let angerShell = new AttackSkill("Anger Shell", 40, 50);
let BeastBoot = new AttackSkill("Beast Boot", 100, 90);

//Learned attacks!
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(speedBolt);
pikachu.learnAttackSkill(venom);
bulbasaur.learnAttackSkill(poisonSeed);
abra.learnAttackSkill(angerShell);
altaria.learnAttackSkill(venom);
abra.learnAttackSkill(auraBreak);
Charizard.learnAttackSkill(BeastBoot);
//The first argument to `attack` should be the index (or key) of the attack

console.log(/--------------------------------------------------/);
pikachu.attack(0, altaria);
console.log(/--------------------------------------------------/);
abra.attack(1, pikachu);
console.log(/--------------------------------------------------/);
abra.attack(1, pikachu);
console.log(/--------------------------------------------------/);
pikachu.attack(0, altaria);
console.log(/--------------------------------------------------/);
pikachu.attack(0, abra);
console.log(/--------------------------------------------------/);
altaria.attack(0, pikachu);
console.log(/--------------------------------------------------/);
altaria.attack(0, pikachu);
console.log(/--------------------------------------------------/);
Charizard.attack(0, abra);
console.log(/--------------------------------------------------/);
abra.showStatus();
console.log(/--------------------------------------------------/);
pikachu.showStatus();
console.log(/--------------------------------------------------/);
Charizard.showStatus();
console.log(/--------------------------------------------------/);
altaria.showStatus();
console.log(/--------------------------------------------------/);
console.log(/--------------------------------------------------/);
console.log(/--------------------------------------------------/);
console.log(/--------------------------------------------------/);
