function zodiacSign(day, month) {
  // TODO: answer here
  const validMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  if (!validMonths.includes(month)) {
    return "Nama bulan salah";
  }

  const isValidDate = (d, m) => {
    const daysInMonth = {
      Januari: 31,
      Maret: 31,
      Mei: 31,
      Juli: 31,
      Agustus: 31,
      Oktober: 31,
      Desember: 31,
      April: 30,
      Juni: 30,
      September: 30,
      November: 30,
      Februari: 29,
    };
    return d > 0 && d <= daysInMonth[m];
  };

  if (!isValidDate(day, month)) {
    return "Input tanggal salah";
  }

  switch (month) {
    case "Desember":
      return day >= 22 ? "Capricorn" : "Sagittarius";
    case "Januari":
      return day <= 19 ? "Capricorn" : "Aquarius";
    case "Februari":
      return day <= 18 ? "Aquarius" : "Pisces";
    case "Maret":
      return day <= 20 ? "Pisces" : "Aries";
    case "April":
      return day <= 19 ? "Aries" : "Taurus";
    case "Mei":
      return day <= 20 ? "Taurus" : "Gemini";
    case "Juni":
      return day <= 20 ? "Gemini" : "Cancer";
    case "Juli":
      return day <= 22 ? "Cancer" : "Leo";
    case "Agustus":
      return day <= 22 ? "Leo" : "Virgo";
    case "September":
      return day <= 22 ? "Virgo" : "Libra";
    case "Oktober":
      return day <= 22 ? "Libra" : "Scorpio";
    case "November":
      return day <= 21 ? "Scorpio" : "Sagittarius";
  }
}

// console.log(zodiacSign(30, "Desember"));
// console.log(zodiacSign(31, "Desember"));
// console.log(zodiacSign(41, "Desember"));
// console.log(zodiacSign(31, "Februari"));
// console.log(zodiacSign(29, "Februari"));
// console.log(zodiacSign(29, "Januari"));

module.exports = zodiacSign;
