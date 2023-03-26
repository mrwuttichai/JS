//ย้ายข้างสมการ

// let a = 20;
// let b = 10;

// let c = a;  //c=20, a=20
// a = b; //a=10

// b = c; //b=20

// console.log(a, b);

// // จด เอาไว้โชว์เทพ ง่ายที่ไม่ง่าย หาค่า max min
// const array = [10,20,30,40,50];
// let maxArray = -99999;
// let minArray = 999999;

// for (let i = 0; i < array.length;i++){
//     if (array[i] > maxArray) {
//         maxArray = array[i];
//     }
//     if (array[i] < minArray) {
//         minArray = array[i];
//     }
// }
// console.log(maxArray, minArray);

//บวกเมทิก
// const matric = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// const matric2 = [
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// const result = [];

// for (let i = 0; i < matric.length;i++){
//     let arr = []
//     for (let j = 0; j < matric[i].length; j++){
//     let sum = matric[i][j] + matric2[i][j];
//     arr.push(sum);        
//     }
//     result.push(arr);
// }
// console.log(result);


//คัดพิมเล็ก พิมใหญ่
// let small = "d0OG123";
// let startUppercase = "A".charCodeAt(0);
// let endUppercase ="Z".charCodeAt(0);
// let startLowercase = "a".charCodeAt(0);
// let endLowercase = "z".charCodeAt(0);
// let startNumber = "0".charCodeAt(0);
// let endNumber = "9".charCodeAt(0);

// // A - Z 65 - 90
// // a - z 97 - 122

// // for (let i = 0; i < small.length; i++) {
// //     console.log(small[i]);
// // }

// let result = "";
// for (const item of small) {
//     // if (item.charCodeAt(0) >= startUppercase && item.charCodeAt(0) <= endUppercase) {
//     //     console.log(item);
//     // }
//     // if (item.charCodeAt(0) >= startLowercase && item.charCodeAt(0) <= endLowercase) {
//     //     console.log(item);
//     // }
//     if (item.charCodeAt(0) >= startNumber && item.charCodeAt(0) <= endNumber) {
//         console.log(item);
//     }
// }

// function generate(arr, n, min, max) {
//     for (let i = 0; i < n; i++) {
//         let random = Math.floor(Matn.random() * (max - min + 1) + min);
//         arr.push(random);
//     } 
// }

// let input = [];
// generate(input, 10);



//function shorthands
// const sum = () => 1+2;
// console.log(sum());


// const sum2 = () => {
//     return 1+2;
// }
// console.log(sum2());

// const sum3 = function(){
//     return 1+2;
// }
// console.log(sum3());



//จากมากไปน้อย จากน้อยไปมาก
// let s = ["sarun", "wefwefwefwoeifjoisajdpfiasdf", "sdfasdfasdfsad"];
// s.sort((a, b) => b.localeCompare(a));

// console.log(s);


// output => [ 'Prayut', 'Oreo', 'Meow', 'Jojo', 'Banglee' ]

// let s = ["sarun", "wefwefwefwoeifjoisajdpfiasdf", "sdfasdfasdfsad"];
// s.sort((a, b) => { 
//     return a.length > b.length;
//     // return b.localeCompare(a); 
// });
// console.log(s);



///////////////////////////////////////////

/* Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

Rock beats Scissors
Scissors beats Paper
Paper beats Rock
If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw". */

/*function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
      return "It's a draw";
    } else if (p1 === 'Rock' && p2 === 'Scissors' || // || called OR
               p1 === 'Scissors' && p2 === 'Paper' ||
               p1 === 'Paper' && p2 === 'Rock') {
      return "The winner is p1";
    } else {
      return "The winner is p2";
    }
  }
console.log(rockPaperScissors("Rock", "Scissors")); // outputs "The winner is p1"
console.log(rockPaperScissors("Paper", "Rock")); // outputs "The winner is p1"
console.log(rockPaperScissors("Scissors", "Scissors")); // outputs "It's a draw"
console.log(rockPaperScissors("Rock", "Paper")); // outputs "The winner is p2" */



////////////////////////////////////////

/*function rps(p1, p2) {
    console.log("");
    if (p1 === "Paper" && p2 === "Hammer") {
        return "p1 win"
    } else if (p1 === "Paper" && p2 === "Scissors") {
        return "p2 win"
    }
    else if (p1 === "Hammer" && p2 === "Scissors") {
        return "p1 win"
    }
    else if (p1 === "Hammer" && p2 === "Paper") {
        return "p2 win"
    }
    else if (p1 === "Scissors" && p2 === "Paper") {
        return "p1 win"
    }
    else if (p1 === "Scissors" && p2 === "Hammer" ) {
        return "p2 win"
    }
    else {
        return "Draw"
    }
}

    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");

    const paperP1 = document.getElementById("paper-p1");
    const hammerP1 = document.getElementById("hammer-p1");
    const sccisorP1 = document.getElementById("scissor-p1");

    const paperP2 = document.getElementById("paper-p2");
    const hammerP2 = document.getElementById("hammer-p2");
    const sccisorP2 = document.getElementById("scissor-p2");

    const check = document.getElementById("check");

    const result = document.getElementById("result");

    let player1Choose = "";
    let player2Choose = "";
    let player1Selected = false;
    let player2Selected = false;

function checkAnswer() {
    console.log(player1Selected, player2Selected);
    if (player1Selected && player2Selected) {
        console.log(player1Choose, player2Choose, "sdfasdfasdf");
        let whoWin = rps(player1Choose, player2Choose);
        result.innerHTML += whoWin;
    }
}

function run() {

    paperP1.addEventListener("click", (e) => {
        player1Choose = "Paper";
        player1Selected = true;
        console.log(player1Choose);
        checkAnswer()
    });

    hammerP1.addEventListener("click", (e) => {
        player1Choose = "Hammer";
        player1Selected = true;
        console.log(player1Choose);
        checkAnswer()
    });

    sccisorP1.addEventListener("click", (e) => {
        player1Choose = "Scissors";
        player1Selected = true;
        console.log(player1Choose);
        checkAnswer()
    });

    paperP2.addEventListener("click", (e) => {
        player2Choose = "Paper";
        player2Selected = true;
        
        console.log(player2Choose);
        checkAnswer()
    });
    hammerP2.addEventListener("click", (e) => {
        player2Choose = "Hammer";
        player2Selected = true;
        console.log(player2Choose);
        checkAnswer()
    });
    sccisorP2.addEventListener("click", (e) => {
        player2Choose = "Scissors";
        player2Selected = true;
        console.log(player2Choose);
        checkAnswer()
    });
}



run();*/