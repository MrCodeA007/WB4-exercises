const partCode1 = `FoodCo 12345-L`;
const part1 = parsePartCode(partCode1);
supplierCode: "FoodCo";
productNumber: "12345";
size: "L";

function parsePartCode() {
  console.log("partCode1 is " + partCode1.substring(0, 6));
  console.log("supplierCode is " + partCode1.substring (7, 12));
  console.log("size is " + partCode1.substring(13));
}
