// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    message = 'This one is on me!'
  }
  else if (someValue > 2000 && someValue < 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    message = 'No can do.'
  }
  
  return message
}


function ternaryCheckCity(destination) {
  destination == "NYC" ? message = 'Ok, sounds good.' : message = 'No go.'
  return message
}



function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': 
      response = "Thank you so much.";
      break;
    case 'not as generous': 
      response = "Thank you.";
      break;
    default:
      response = "Bye."
      break;
  }
  return response;
}