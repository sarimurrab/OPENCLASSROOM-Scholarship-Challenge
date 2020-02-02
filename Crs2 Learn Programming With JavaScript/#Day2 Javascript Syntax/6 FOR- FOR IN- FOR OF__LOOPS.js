// SIMPLE FOR LOOP

 const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log('Passenger boarded!');
}

console.log('All passengers boarded!');



// FOR IN LOOP
const passengers = [
    'Will Alexander',
    'Sarah Kate',
    'Audrey Simon',
    'Tau Perkington'
]

for (let i in passengers) {
    console.log('Boarding passenger ' + passengers[i]);
}


// FOR OF LOOP
const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    },
    {
        name: 'Audrey Simon',
        ticketNumber: 779042
    },
    {
        name: 'Tau Perkington',
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger.name + ' with ticket number ' + passenger.ticketNumber);
}