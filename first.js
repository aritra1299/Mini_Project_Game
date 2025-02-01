// let num = 20;
// if (num%2 == 0){
//     console.log(num, "is even number");

// }
// else {
//     console.log(num, "is odd number");
// }


// let num=prompt("Enter a number: ")
// if (num%5 == 0){
//     console.log(num,"is multiple of 5")
// }else{
//     console.log(num, "is note multiple of 5")
// }



// let score = prompt("Enter your score(50-100): ");
// let grade;

// if(score>=98 && score <= 100){
//     grade = "A";
// }
// else if(score >= 60 && score <= 69){
//     grade = "C";
// }
// else if(score >= 70 && score <= 79){
//     grade = "B"
// }
// else if (score >= 50 && score <= 59){
//     grade = "D"
// }
// console.log ("according your grade your grade is",grade)





            //LOOPs
// for(let count = 1; count <= 5; count++){
//     console.log("Aritra Mondal");
// }

    //Calculate sum of 1 to n
// let n = prompt("Enter a number")
// let sum=0;
// for(let i = 1; i<=n; i++){
//     sum =sum + i;
// }
// console.log("Sum =",sum);

    //  DANGER!!!!!!!!!!!!!!!!!! INFINITE LOOP
// for(let i = 1; i<=6; i++){
//     console.log("i =",i);
// }
// let i = 1;
// while (i>=0){
//     console.log("Hello");
//     i++;
// }

// Print all even number 0 to 100
// for(let i=0; i<=100; i++){
//     if(i%2 === 0){
//         console.log("Even number are: ",i);
//     }
// }

//     GAME
// let gameNumber = 25;
// let userNum = prompt("gess the game number: ");

// if (userNum != gameNumber){
//     userNum = prompt("You entered wrong number,Guess again");
// }
//  console.log("You entered right number");

// let obj = {
//     item: "pen",
//     price: 25,
// };
// let output = `The cost of ${obj.item} is ${obj.price}`
// console.log(output)

// let str="Aritra\nMondal";
// console.log(str); 
// console.log(str.length);

                //ARRAY IN J.S 
// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);
// marks[0]=95;

// let heroes = ["ironman","superman","hulk","batman"];
// for(let idx = 0; idx < heroes.length; idx++){
//     console.log(heroes[idx]);
// }


                // FUNCTION 
// function myFuns(){
//     console.log("Aritra");

// }
// myFuns();

    // sum 
// function sum(x, y){
//     s = x + y;
//     return s;
// }
// let val = sum(8, 5);
// console.log(val);

    //COUNT VOWELS IN STRING 
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char == "a"||char =="e"||char == "i"||char == "o"||char =="u"){
//             count++
//         }
//     }
//     console.log(count);
// }


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const smg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}


const drawGame =() => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again...";
    msg.style.backgroundColor = "#081b31";
};


const showWiner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    // console.log("User choice is= ", userChoice);
    const compChoice = genCompChoice();
    // console.log("com choice", compChoice);

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
           
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin, userChoice, compChoice);
        
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");    
        playGame(userChoice);
    })
})
