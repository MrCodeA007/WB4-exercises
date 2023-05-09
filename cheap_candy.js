let product = [
  { products: "Gummy Worms", prices: 5.79 },
  { products: "Plain M&Ms", prices: 2.89 },
  { products: "Peanut M&Ms", prices: 2.89 },
  { products: "Swedish Fish", prices: 3.79 },
  { products: "Fruit Snacks", prices: 2.0 },
  { products: "snickers", prices: 1.0 },
  { products: "jolly Ranchers pack", prices: 5.0 },
  { products: "Crunch", prices: 2.0 },
  { products: "Haribo", prices: 1.0 },
  { products: "tootsie roll", prices: 0.5 },
];

for (let i = 0; i < product.length; i++) {
  if (product[i].prices < 4.0) {
    console.log("Candies that cost less than 4.00 are " + product[i].products);
  }
}
console.log(``);
for (let j = 0; j < product.length; j++) {
  if (product[j].products.indexOf == "M&Ms") {
    console.log(
      "Candies that has the name M&M to their name are " + product[j].products
    );
  }
}
