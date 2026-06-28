const submit = document.getElementById("submit");
const setup = document.getElementById("setup");
const game = document.getElementById("game");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";
let current = "X";
let board = ["","","","","","","","",""];
let gameOver = false;

const cells = document.querySelectorAll(".cell");

submit.onclick = function(){

    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    setup.style.display = "none";
    game.style.display = "block";

    message.innerText = `${player1}, you're up`;
};

const wins = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach((cell,index)=>{

    cell.onclick=function(){

        if(board[index]!=="" || gameOver) return;

        board[index]=current;
        cell.innerText=current;

        if(checkWinner()) return;

        if(current==="X"){
            current="O";
            message.innerText=`${player2}, you're up`;
        }else{
            current="X";
            message.innerText=`${player1}, you're up`;
        }

    };

});

function checkWinner(){

    for(let combo of wins){

        let [a,b,c]=combo;

        if(
            board[a] &&
            board[a]===board[b] &&
            board[b]===board[c]
        ){

            gameOver=true;

            document.getElementById(a+1).classList.add("winner");
            document.getElementById(b+1).classList.add("winner");
            document.getElementById(c+1).classList.add("winner");

            let winner=current==="X"?player1:player2;

            message.innerText=`${winner}, congratulations you won!`;

            return true;
        }

    }

    return false;
}//your JS code here. If required.
