const name: string = 'hoony',
  age: number = 30,
  gender: string = 'male';

const sayHi = (name: string, age: number, gender: string): string => {
  console.log(`Hello ${name}, you are ${age} years old, you are a ${gender}!`);
  return `Hello ${name}, you are ${age} years old, you are a ${gender}!`;
};

sayHi(name, age, gender);

export {};
