// Code your solutions in this file

let names = ["Orengo", "Ole sapit", "Ledama"];
function writeCards(names, eventName) {
  let thankCard = [];
  for (let i = 0; i < names.length; i++) {
    thankCard.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankCard;
}

names = ["Charlie", "Samip", "Ali"];
console.log(writeCards(names, "birthday"));

function countDown() {
    let count = 0;
    while (count < 11) {
        console.log (count++);
    }
}

// function countDown(digit) {
//   while (digit >= 0) {
//     console.log(digit--);
//   }
// }
// countDown(10);