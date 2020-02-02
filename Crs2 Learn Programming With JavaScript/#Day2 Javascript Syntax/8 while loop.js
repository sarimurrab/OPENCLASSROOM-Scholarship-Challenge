let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // one passenger boards
    passengersStillToBoard--; // so there is one fewer still to board
    seatsLeft--; // and one fewer seat
}

console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats