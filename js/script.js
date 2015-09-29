function Hero(name,superpower) {
    this.name=name;                 //класс конструктор Hero
    this.superpower=superpower;
}

Hero.prototype.sayName = function(name) {
    console.log("My name is "+this.name);
};
Hero.prototype.sayPower = function(superpower) {
    console.log(this.superpower);
};

function SpeedHero(name, superpower) {
    //Здесь можно сделать двумя способами, но я тебя прошу сделать через apply или call
    Hero.apply(this,arguments)
}

//тут нужно как-то унаследовать прототип класса

SpeedHero.prototype= Object.create(Hero.prototype);

SpeedHero.prototype.sayPower = function() {
    //перезапись метода sayPower
    console.log(this.superpower.split('').reverse().join(''))
}

var flash = new SpeedHero('Flash', 'Speed'); //создали первый объект
flash.sayName();
flash.sayPower();

var superman = new Hero('Superman', 'Strength'); //создали второй объект
superman.sayName();
superman.sayPower();