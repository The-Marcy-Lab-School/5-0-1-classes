# Classes - The Basics

**Conceptual**
* What can `this` point to?
    * Global object OR the “owner” object
* Explain how classes enable encapsulation

**Implementation**
* Implement a class with a constructor
* Implement class instance methods
* Utilize `this` in class methods to access instance values
* Instantiate instances of a class with `new`
* Access the `.prototype` 

## Intro

In the last lecture, we learned about **encapsulation** - bundling data and methods that act on that data into an object. We learned about using **closures** to create **private variables**.

```js
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {
      return [...friends]; 
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    }
  }
}
const myFriendsManager = makeFriendsManager();
myFriendsManager.addFriend('ahmad')
myFriendsManager.addFriend('brandon')
myFriendsManager.addFriend('carmen')
```

While this certainly achieves the main objectives of **encapsulation**, the remaining pillars of Objct-Oriented Programming (OOP) are not satisfied:

* **Inheritance** - sharing behavior between objects
* **Abstraction** - hiding complexity through functions and prototypes
* **Polymorphism** - similar objects can be used interchangeably

## Inheritance

The pillar of **inheritance** is all about sharing behavior between objects.

The nice thing about encapsulation is that we can re-use `makeFriendsManager` to create multiple objects that look alike: each friends manager has `getFriends` and `addFriends` methods. 

This kind of function is called a **factory function** and each object created from this factory function is called an **instance**.

```js
// factory functions return objects
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {...},
    addFriend(newFriend) { ... },
  }
}

// instances of the factory function
const myFM = makeFriendsManager();
const yourFM = makeFriendsManager();

// are these the same object?
console.log(myFM === yourFM)

// are the methods of these objects the same?
console.log(myFM.addFriend === yourFM.addFriend)
```

The objects `myFM` and `yourFM` definitely have the same behavior. But do they _share_ that behavior? That is, **are the methods that they each have referencing the same exact function?**

**<details><summary style="color: purple">Q: Are the methods that they each have referencing the same exact function?</summary>**
> No! They are not the same. Each time the factory function is invoked, a brand new object is made and the methods are recreated as well. 
> This is a waste of memory.
</details><br>

## Classes

To achieve true **inheritance** where objects can be created that share a set of methods, we define a **class**.

A **class** defines a type of object. It has a **constructor function** for defining the default properties that every **instances** of that class (objects of that type) will have. All instances of that class share the same methods. 

**<details><summary style="color: purple">Q: Suppose we wanted to create a class to represent users. What would the default properties be? What methods would be shared by each instance? </summary>**

> * The `User` class would have a **constructor function** for making a `User` isntance with properties like `username`, `email`, and `password`
> * The `User` class might have methods like `changeUsername` or `setPassword`

</details><br>



## Class Constructor and `new`

Many languages implement classes in some manner. In JavaScript it starts with this:

```js
class User {

}
```

Inside the curly braces we define a **constructor function** which allows us to create **instances** by invoking the name of the class with the `new` keyword.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null; // to be set later
  }
}
const ben = new User('ben', 'ben@mail.com');
const zo = new User('zo', 'zo@mail.com');
console.log(ben, zo);
// User { name: 'ben', email: 'ben@mail.com, password: null }
// User { name: 'zo', email: 'zo@mail.com, password: null }
```

Classes have some quirks to get used to:
* Invoking `new User` will invoke the `constructor` function inside of the `class`.
* You have to invoke that function with the `new` keyword (you'll get an error if you don't)

```js
// User is a function, but you can't just call it
console.log(typeof User); // function

User('ben', 'ben@mail.com'); // error: you must use the new keyword to invoke a constructor function
```


## What is `this`?

`this` is one of the most complicated topics in JavaScript. It is very quirky. But to keep things simple, let's start here:

* `this` ALWAYS points to an object.
* When used as method of an object, **`this` refers to the object that invokes the method.**
* When a `constructor` function is invoked with the `new` keyword, a new object will be created and `this` will point to the newly created object.

```js
class User {
  constructor(name, email) {
    // this = {};
    this.name = name;
    this.email = email;
    this.password = null;
    console.log(this);
    // return this;
  }
}
const ben = new User('ben', 'ben@mail.com');
// User { name: 'ben', email: 'ben@mail.com, password: null }

const zo = new User('zo', 'zo@mail.com');
// User { name: 'zo', email: 'zo@mail.com, password: null}
```

## Class Methods

Remember, **encapsulation** wants us to bundle data with methods that operate on that data.

Adding methods to a `class` definition looks like this:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}
const ben = new User('ben', 'ben@mail.com');

ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!
```

When used in a method, the `this` keyword refers to the object that is invoking the method.

```js
const ben = new User('ben', 'ben@mail.com');
const zo = new User('zo', 'zo@mail.com');

// they are the same method
console.log(ben.setPassword === zo.setPassword);

// but when we invoke the method, the value of `this` changes
ben.setPassword('1234');
zo.validatePassword('1234'); // No password set.
```

## Quiz!

## Summary

