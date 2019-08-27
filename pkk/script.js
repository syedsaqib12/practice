


// function generatePerson(name, gender, hobbies){
//     let person = {
//         name : "Awais",
//         gender : "male",
//         hobbies : ["sleep", "code"],
//         greet : function(greetings){
//             return(greetings)
//         }
//     }
//     return {
//         person.name,
//         person.gender,
//         person.hobbies
//     }
// }

// // let person1 = generatePerson("Aliraza", "Male", ["Code", "sleep"]);
// // console.log(person1);
// function construct (name,person,gender){

//     /*let idcard1 = {
//         name: "saqib",
//         gender: "gender",
//         hobbies : ["sleep","code"],
//         bio: function () {
//             console.log ('')
//         }
//         */



// }
/*function constructcar(name, color, numberPlate, owner) {

    return {
        name: name,
        color: color,
        numberPlate: numberPlate,
        owner: owner,
        bio: function () {
            console.log(`${this.name}is ${this.color}${this.numberPlate}${this.owner}`)
        }

    }



}
let car1 = constructcar("suzki", "white", 8731876, "Ali");
console.log(car1);


let cars = [];
function constructcar2(name, color, numberPlate, owner) {

    return {
        name: name,
        color: color,
        numberPlate: numberPlate,
        owner: owner,
        bio: function () {
            console.log(`${this.name}is ${this.color}${this.numberPlate}${this.owner}`)
        }

    }



}

let car = constructcar2("hondai", "black", 813819, "saqb");
cars.push(car);
*/


function madeCellPhone (name,color,ImeiNo,price,body) {
   
   return { 
    name: name,
    color: color,
    ImeiNo: ImeiNo,
    price: price,
    body : body,

    bio: function() {
        console.log (`${this.name} ${this.color} ${this.ImeiNo} ${this.price} ${this.body}`)

    }
   }
    
   
 

}
let phone = madeCellPhone ("Nokia","black",87817,25000,"metallic");
console.log(phone);