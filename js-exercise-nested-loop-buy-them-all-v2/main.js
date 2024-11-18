function buyThemAll(books, budget) {
  let totalBooks = 0;
  let bookWillBuy = "";
  let totalMoney = 0;

  while (books.length && budget > 0) {
    let bookTitle = "";
    let priceString = "";
    let sliceIndex = 0;

    for (let i = 0; i < books.length; i++) {
      if (books[i] !== ":" && books[i] !== "," && priceString.length === 0) {
        bookTitle += books[i];
      } else if (books[i] === ":") {
        priceString += books[i + 1];
      } else if (books[i] === ",") {
        sliceIndex = i;
        break;
      } else if (
        priceString.length >= 1 &&
        books[i] !== ":" &&
        books[i] !== "," &&
        i !== books.length - 1 &&
        books[i + 1] !== ","
      ) {
        priceString += books[i + 1];
      } else {
        sliceIndex = i;
      }
    }

    const priceNumber = Number(priceString);

    if (budget >= priceNumber) {
      budget -= priceNumber;
      totalMoney += priceNumber;
      bookWillBuy += bookTitle + ", ";
      totalBooks++;
    }

    books = books.slice(sliceIndex + 1);
  }

  let result = "";

  if (totalBooks > 0) {
    result =
      "Afista membeli " +
      totalBooks +
      " buku yaitu " +
      bookWillBuy.slice(0, -2) +
      ". Total belanja " +
      totalMoney +
      ", sisa uang Afista adalah " +
      budget +
      ".";
  } else {
    result =
      "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah " +
      budget +
      ".";
  }

  return result;
}
module.exports = buyThemAll;
