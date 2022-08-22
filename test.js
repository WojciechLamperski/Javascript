var myArray = new Array();
myArray [0] = [8];
myArray [1] = ["hello"];

var myCar = new Object();
myCar.maxSpeed = 120;
myCar.driver = "Shaun";

myCar.drive = function() { console.log("now driving");};

myCar.drive();

var myArray2 = [true, 15, "hi"];

var myCar2 = {
    maxSpeed: 70, 
    driver: "Net Ninja", 
    distanceTraveled: function(speed, time) { 
        console.log(speed * time);
    } 
};

console.log(myCar2.maxSpeed);
myCar2.distanceTraveled();