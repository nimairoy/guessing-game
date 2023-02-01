
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');

function guessingGame(){
    
    let numOfWin = 0;
    let numOfLost = 0;
  
    for(let i = 1; i <=5; i++) {
        let guessingNumber = parseInt(prompt("Enter a number from 1 to 5: "));
        let randomNumber = Math.floor(Math.random() * 5) + 1;  
        
        if(guessingNumber === randomNumber){
            console.log("You are won the game.");
            numOfWin++;
        }else{
           console.log('You are lost the game. The random number was: ', randomNumber);
           numOfLost++
        }
        
    }
   
    para2.textContent =`Total Number of Win: ${numOfWin}`;
    para3.textContent =`Total Number of Lost: ${numOfLost}`;
     
}
guessingGame();