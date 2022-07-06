// function writeCards(names, event){
//     for (let i = 0; i < names.length; i++){
//     names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//   }
//     return names;
//   }
  
// function countdown(number) {
//     let countdown = 0;
//     while (number >= countdown) {
//         console.log(number--);
//     }
// }
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }

  return messages;
}
writeCards(messages);

function countDown(i) {
    for(let countDown = 0; countDown <= 10; countDown++) {
        console.log(countDown);
    }
}