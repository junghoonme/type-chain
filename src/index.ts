interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'hoony',
  age: 30,
  gender: 'male',
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, you are ${age} years old, you are a ${gender}!`;
};

console.log(sayHi(person));

export {};
