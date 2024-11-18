function travelDiscount(id, amount) {
  let status;
  let pricePerPerson;
  let discount = 0;

  if (id.includes("STD")) {
    status = "STUDENT";
    pricePerPerson = 20000;
    if (amount > 20) {
      discount = 0.2;
    }
  } else if (id.includes("CORP")) {
    status = "CORPORATE";
    pricePerPerson = 50000;
    if (amount > 30) {
      discount = 0.25;
    }
  } else {
    return "Maaf, voucher yang anda miliki tidak valid!";
  }

  let totalPrice = pricePerPerson * amount;
  totalPrice -= totalPrice * discount;

  return `Selamat! Voucher untuk ${status} dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalPrice}.`;
}

// console.log(travelDiscount("STD9845-8461-121", 11));
// console.log(travelDiscount("CORP8135-4612-912", 30));
// console.log(travelDiscount("STD7601-639-184", 36));
// console.log(travelDiscount("CORP5611-8456-999", 31));
// console.log(travelDiscount("8347-7-9124365", 99));
// console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
