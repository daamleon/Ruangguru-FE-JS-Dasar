function quantityDiscount(quantity, price) {
  let totalHarga = quantity * price;
  let diskon = 0;

  if (quantity >= 10) {
    diskon = 0.2 * totalHarga;
  } else if (quantity >= 5) {
    diskon = 0.15 * totalHarga;
  }

  let subtotal = totalHarga - diskon;
  let pajak = 0.11 * subtotal;
  let total = subtotal + pajak;

  return total;
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
