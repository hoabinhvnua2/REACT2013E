const data = [
  { id: 1, firstName: "React", age: 20, lastName: "Native" },
  { id: 2, firstName: "React", age: 15, lastName: "js" },
  { id: 3, firstName: "Html", age: 26, lastName: "css" },
  { id: 4, firstName: "Python", age: 20, lastName: "Mongo" },
  { id: 5, firstName: "Node", age: 13, lastName: "js" },
];

const result = data.reduce(
  (acc, item) => {
    if (item.age % 2 === 0) {
      acc.chan.children.push(item);
    } else {
      acc.le.children.push(item);
    }

    return acc;
  },
  {
    le: {
      children: [],
    },
    chan: {
      children: [],
    },
  }
);

console.log(result);

console.log("hello" == "Hello");

const test = { id: 1, firstName: "React", age: 20, lastName: "Native" };
const test1 = { id: 1, firstName: "React", age: 20, lastName: "Native" };

console.log(test === test1);
console.log(JSON.stringify(test) === JSON.stringify(test1));
