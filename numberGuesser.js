// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
  let secretTarget = Math.floor(Math.random()*9)
  return secretTarget
}
function compareGuesses(userGuess,computerGuess,secretTarget){
  
  if( userGuess === computerGuess){
        return true;
  }
  if(userGuess !== computerGuess){
    userGuess = Math.abs(userGuess - secretTarget)
    computerGuess = Math.abs(computerGuess - secretTarget)
  if(userGuess < computerGuess){
    return true ;
  }
  if(computerGuess < userGuess){
    return false ;
  }
 }
}

function updateScore(winner){
  switch(winner){
    case 'human':
    humanScore+=1
    break;
    case 'computer':
    computerScore+=1
    break;
  }
}
function advanceRound(){
  currentRoundNumber += 1
}


