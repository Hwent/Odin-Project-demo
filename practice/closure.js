function outer() {
  const outerVar = "Hey I am the outer Var";
  const inner = () => {
    const innerVar = "hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  };
  inner();
}

function outer1() {
  const outerVar = "Hey I am the outer Var";
  const inner = () => {
    const innerVar = "hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  };
  return inner;
}

outer();
const innerFn = outer1();
innerFn();

//Closures are the ability of a child function, or an inner function,
//to access variables from a higher level scope even after the
//functions have been called or closed or closed over.

// function behavior(animal) {
//   return function (action) {
//     return `${animal} ${action}`;
//   };
// }
const behavior = (animal) => {
  return (action) => {
    return `${animal} ${action}`;
  };
};

const dog = behavior("dog");
console.log(dog("barks"));
console.log(dog("eats"));
console.log(typeof dog);

const cat = behavior("cat");
console.log(cat("meows"));
console.log(cat("eats"));

//
const behavior1 = (animal) => {
  if (animal === "dog") {
    return {
      barks: () => `${animal} barks`,
      eats: () => `${animal} eats`,
    };
  } else if (animal === "cat") {
    return {
      meows: () => `${animal} meows`,
      eats: () => `${animal} eats`,
    };
  }
};

const dog1 = behavior1("dog");
console.log(dog1.barks());
console.log(dog1.eats());

const cat1 = behavior1("cat");
console.log(cat1.meows());
console.log(cat1.eats());

const behavior2 = (animal, action) => {
  const actions = {
    dog: ["barks", "eats"],
    cat: ["meows", "eats"],
  };

  if (actions[animal].includes(action)) {
    return `${animal} ${action}`;
  } else {
    return `The ${animal} cannot ${action}`;
  }
};

console.log(behavior2("dog", "barks"));
console.log(behavior2("cat", "meows"));
console.log(behavior2("dog", "meows")); // This will return "The dog cannot meows"

//Bank account
const createBankAccount = (initialBalance) => {
  let balance = initialBalance;
  return {
    deposit: (amount) => {
      balance += amount;
      return "Deposit " + amount;
    },
    withdraw: (amount) => {
      if (balance - amount < 0) {
        console.log("Insufficient funds");
        return;
      }
      balance -= amount;
      return "Withdraw " + amount;
    },
    checkBalance: () => balance,
  };
};

const account = createBankAccount(100);
console.log(account.deposit(50)); // Outputs: 150
console.log(account.withdraw(20)); // Outputs: 130
console.log(account.checkBalance()); // Outputs: 130
