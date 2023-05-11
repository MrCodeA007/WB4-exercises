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

  product.sort(function (a, b){
    
    if (a.products < b.products) return -1;
    else if (a.products == b.products) return 0;
    else return 1;
})

let productName = product.length;
for (let i = 0;i<productName;i++) {
    console.log(product[i].products);

    //fix upper and lower case issue

    /*another way to do it

function compareProducts(a,b) {
    if(a.products < b.products ){
        return 1;
    }
        if( b.products < a.product) {
            return -1;
        }
    return 0;
    }

    products.sort(compareProducts);

    for (let i = 0;i <products.length;i++) {
        console.log(products[i])
    } check example after class */

}
  console.log(`---------------------------------------`)
//compare product by decending price
  product.sort(function (a, b){
    if (a.prices > b.prices) return -1;
    else if (a.prices== b.prices) return 0;
    else return 1;
})

productName = product.length;
for (let i = 0;i<productName;i++) {
    console.log(product[i].prices.toFixed(2));
}

