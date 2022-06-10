////////////////////////////////////////////////////////////////// Fizz-Buzz
let num = 15;
if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizz buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else {
  console.log(num);
}
////////////////////////////////////////////////////////////////// Random Number between 1-50 - 6 times to console.
for  (let i=0; i<6; i++) {        
    console.log(Math.round((Math.random() * 50)+1));
}
////////////////////////////////////////////////////////////////// Counting backwards from 9 to 0
let array =[]
for (let i=9; i>0; i-=1){
array.push(i);
}
console.log(array)
////////////////////////////////////////////////////////////////// Pet drinking and eating
let pooch = {
    name: "Rocco",
    Type: "Dog",
    Age: 451,
    colour: "Neon Green",
eat()
{
return console.log(`${this.name} is scoffing his dinner`)
},
drink()
{
return console.log(`${this.name} is drinking out the toilet !`)
}}
pooch.eat()
pooch.drink()
//////////////////////////////////////////////////////////////////  Password incorrect if less than 8 characters.
let password = "password"
if (password.length == 8)
{
console.log("correct")
}
else if (password.length <= 8)
{
console.log("incorrect")
}
////////////////////////////////////////////////////////////////// Generate random num between 1-30 6 times and see if divisible by 7.
for (let i=0; i<6; i++){
    (math.round((math.random()*30) +1))
    if (i % 7 ==0){
    console.log(`${random} can be divided by 7`)
    } else
    console.log(`${random}cannot be divided by 7`)
    }
    for  (let i=0; i<6; i++) {
    let numz = (Math.floor((Math.random()*30)))}
//////////////////////////////////////////////////////////////////