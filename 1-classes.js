/* Generic Class Syntax:

class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  methodName() {
    console.log(this.prop1, this.prop2)
  }
}

const instance = new ClassName('a', 'b');
instance.methodName();

*/

// Create a User Class and a Pet class here


// creating class instances
const ben = new User();
const fido = new Pet();

// Instances are objects derived from a particular class
console.log(ben); // User {}
console.log(fido); // Pet {}