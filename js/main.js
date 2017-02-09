//my own code

//1.
function Animal(name, type, weight, maxSpeed, speed, distance) {
	var name = name;
	var type = type;
	var weight = weight;
	var speed = speed;
	var maxSpeed = maxSpeed;
	var distance = distance;
	
	this.getName = function () {return name;};
	this.getType = function () {return type;};
	this.getWeight = function () {return weight;};
	this.setWeight = function (newWeight) {weight = newWeight;};
	this.run = function () {
		if ((speed < 0) || (speed > maxSpeed)) {
			throw("Incorrect speed!");
		}
		return speed;
	};
	this.coverDistance = function () {
		return (distance / speed);
	};
}

var myAnimal = new Animal("Alex", "cat", 120, 70, 50, 500);

console.log(myAnimal.getName());
console.log(myAnimal.getType());
console.log(myAnimal.getWeight());
console.log(myAnimal.run());
console.log(myAnimal.coverDistance());
console.log("---------");

//2.
function Bird(name, type, weight, maxSpeed, speed, distance, canFly, maxFlySpeed) {
	Animal.apply(this, arguments);
	var oldCoverDistance = this.coverDistance;
	// var canFly = canFly;
	// var msxFlySpeed = maxFlySpeed;
	
	this.fly = function () {
		if (!canFly) {
			maxFlySpeed = 0;
		};
	};
	this.coverDistance = function (canFly) {
		if (maxFlySpeed > maxSpeed) {
			return (distance / maxFlySpeed);
		}
		else 
			return (distance / maxSpeed);
		};
};

var myBird = new Bird("Kesha", "bird", 0.3, 0.005, 0.002, 5, true, 0.01);

console.log(myBird.getName());
console.log(myBird.getType());
console.log(myBird.getWeight());
//console.log(myBird.run());
console.log(myBird.coverDistance());







