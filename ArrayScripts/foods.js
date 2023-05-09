let lunch = [ 
    {item: "Hamburger", price: 12.99},
    {item: "chips and dip", price: 5.00},
    {item: "orange soda", price: 3.00}
]; //lunch array

let subTotal = 0;
for (let i=0;i<lunch.length;i++) {
    subTotal += lunch[i].price;
}

const tax = subTotal * 0.08;
const tip = subTotal * 0.18;
const totalDue = subTotal + tip + tax;

console.log(`subtotal`, subTotal.toFixed(2));
console.log(`tax:`, tax.toFixed(2));
console.log(`tip`, tip.toFixed(2));
console.log(`totalDue:`, totalDue.toFixed(2));






