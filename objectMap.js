const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
  ]);

  fruits.set("oranges", 200)

  console.log(fruits)
  console.log(typeof fruits)
  console.log(fruits instanceof Map)
  console.log(fruits.get("apples"))