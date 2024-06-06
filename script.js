const carPrices = [
    { min: 500, max: 750, step: 50 },
    { min: 750, max: 1500, step: 100 },
    { min: 15000, max: 25000, step: 1000 }
];

const carCards = document.querySelectorAll('.car-card');
const buyButtons = document.querySelectorAll('.car-card button');
const messages = document.querySelectorAll('.car-card .message');

for (let i = 0; i < carCards.length; i++) {
