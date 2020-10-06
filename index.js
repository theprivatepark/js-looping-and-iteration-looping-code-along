// Code your solutions in this file
function writeCards(names, event) {
  let array = []
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
return array;
}

function countDown(num) {
  for (let countdown = 10; countdown >= 0; countdown--) {
    console.log(countdown);
  }
}
