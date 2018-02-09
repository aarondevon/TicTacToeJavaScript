const validUserChoice = (userChoice) => {
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    return true;
  } else {
    return false;
  }
}