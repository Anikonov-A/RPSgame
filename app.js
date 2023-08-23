// const rps = (p1, p2) => {
//     if ((p1 === 'scissors' && p2 === 'paper') ||
//         (p1 === 'paper' && p2 === 'rock') ||
//         (p1 === 'rock' && p2 === 'scissors')) {
//         console.log(getMsg(1));
//     } else if ((p1 === 'paper' && p2 === 'scissors') ||
//         (p1 === 'rock' && p2 === 'paper') ||
//         (p1 === 'scissors' && p2 === 'rock')) {
//         console.log(getMsg(2));
//     } else {
//         console.log(`Draw`);
//     }
// };
// const getMsg = (n) => `Player ${n} won!`;
//
// const arrWithValue = ['paper', 'rock', 'scissors'];
// let randomValue = (arr) =>{
//     return arr[Math.floor(Math.random() * arrWithValue.length)]
// };
//
// console.log(randomValue(arrWithValue))
// console.log(randomValue(arrWithValue))
// rps(randomValue(arrWithValue),randomValue(arrWithValue));
//
const btnRock = document.querySelector('.btn_rock');
const btnScissors = document.querySelector('.btn_scissors');
const btnPaper = document.querySelector('.btn_paper');

const result = document.querySelector('.result');
let computerResult = document.querySelector('.computer_result')
let playerChoice = '';

const arrWithValue = ['paper', 'rock', 'scissors'];

let playerCounters = document.querySelector('.player_counter');
let computerCounters = document.querySelector('.computer_counter')

let computerCounter = 0;
let playerCounter=0;




let computerChoice = (arr) => {
    return arr[Math.floor(Math.random() * arrWithValue.length)]
};
const rpsFunc = (playerChoice, computerChoice) => {

    if ((playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'rock' && computerChoice === 'scissors')) {
        result.textContent = `You are won!`;
        playerCounter++;
        playerCounters.textContent = `${playerCounter}`;
    } else if ((playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')) {
        result.textContent = `Computer won!`;
        computerCounter++
        computerCounters.textContent = `${computerCounter}`;

    } else {
        result.textContent = `Draw!`;
    }
    computerResult.textContent = `${computerChoice}`

}
btnPaper.addEventListener('click', () => {
    playerChoice = arrWithValue[0]
    rpsFunc(playerChoice, computerChoice(arrWithValue))
})

btnRock.addEventListener('click', () => {
    playerChoice = arrWithValue[1]
    rpsFunc(playerChoice, computerChoice(arrWithValue))
})
btnScissors.addEventListener('click', () => {
    playerChoice = arrWithValue[2]
    rpsFunc(playerChoice, computerChoice(arrWithValue))
})
