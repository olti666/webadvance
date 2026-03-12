function displayAlert(){
    alert("This text is red")
}
displayAlert();

function writeHTML(number1 ,number2) {
    return number1+number2;
}
document.write(writeHTML(8, 3))

function toCelsius(f) {
    return (5/9) * (f-32);
}

console.log("5 faronihite is equal to " + toCelsius(5) + " celsius");

var arrayFunction = () => alert("Hello");

arrayFunction();

function dsFunction(){
    var localVar = "DigitalSchool";
    alert(localVar);
}

dsFunction();

function toSeconds(m){
    return m*60;
}

console.log(toSeconds(5));

function trianglePerimeter(a, b, c){
    return a + b + c;
}

console.log(trianglePerimeter(5, 6, 7));

console.log(toSeconds(5));

var Car = {name:"Audi", color:"red",year:2026, vin:www23455, licensePlate:"01-434-OH"};

alert(Car.licensePlate);