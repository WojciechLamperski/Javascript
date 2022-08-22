
var myCar = {
    maxSpeed: 70, 
    driver: "Net Ninja", 
    distanceTraveled: function(speed, time) { 
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    } 
};

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.distanceTraveled = function(speed, time){
        console.log(speed * time);
    };
    this.longDriver = function(){
        console.log("driver name is " + this.driver);
    };

};

var myCar = new Car(50, "ninja");
var myCar2 = new Car(50, "Humty Dumpty");
var myCar3 = new Car(50, "Shaun");
var myCar4 = new Car(50, "Wojtek");
var myCar5 = new Car(50, "Mama");
var myCar6 = new Car(50, "James Bond");
var myCar7 = new Car(50, "Bruce Lee");