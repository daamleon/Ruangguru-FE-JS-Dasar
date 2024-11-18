function travelSeat(passengers, seatColumn) {
  if (seatColumn < 1) {
    return "Invalid number";
  } else if (passengers.length === 0) {
    return "Oops! tickets not sold!";
  }

  let result = [];
  let seat = [];

  passengers.sort();
  passengers.forEach((penumpang) => {
    seat.push(penumpang);
    if (seat.length === seatColumn) {
      result.push(seat);
      seat = [];
    }
  });

  let seatAvailable = seatColumn - seat.length;

  if (seat.length < seatColumn && seat.length > 0) {
    for (let i = 0; i < seatAvailable; i++) {
      seat.push("Seat available");
    }
    result.push(seat);
    seat = [];
  }

  return result;
}

console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));

module.exports = travelSeat;
