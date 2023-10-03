// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

const names  = ["Charlie", "Samip", "Ali"];
const eventName = ["birthday"];

function writeCards(names, eventName) {
  //debugger
  const messages = []
  for (let i = 0; i < names.length; i++) {
    //console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    //debugger
  }
  return messages;  
}

function countDown() {
  let countdown = 10;
  while (countdown > -1) {
    console.log(countdown--);
  }
}
