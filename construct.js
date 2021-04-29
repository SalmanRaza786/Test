// constructor function
function Person(firstName,lastName,dob){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=dob;
    
}

const person= new Person('Salman','Raza','01-09-1995');
const person2= new Person('Faheem','Raza','01-09-1995');

console.log(person2.firstName);

