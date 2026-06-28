const submit = document.getElementById("submit");
const game = document.getElementById("game");
const setup = document.getElementById("setup");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";

let currentPlayer = "x";
let gameOver = false;

let board = ["","","","","","","","",""];

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

submit.addEventListener("click",function(){

    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    setup.style.display="none";
    game.style.display="block";

    message.textContent = player1 + ", you're up";
});

const cells = document.querySelectorAll(".cell");

cells.forEach(function(cell,index){

    cell.addEventListener("click",function(){

        if(gameOver) return;

        if(board[index]!="") return;

        board[index]=currentPlayer;

        cell.textContent=currentPlayer;

        if(checkWinner()){
            return;
        }

        if(currentPlayer=="x"){
            currentPlayer="o";
            message.textContent=player2 + ", you're up";
        }else{
            currentPlayer="x";
            message.textContent=player1 + ", you're up";
        }

    });

});

function checkWinner(){

    for(let pattern of wins){

        let a=pattern[0];
        let b=pattern[1];
        let c=pattern[2];

        if(
            board[a]!=="" &&
            board[a]===board[b] &&
            board[b]===board[c]
        ){

            gameOver=true;

            document.getElementById(a+1).classList.add("selected");
            document.getElementById(b+1).classList.add("selected");
            document.getElementById(c+1).classList.add("selected");

            if(currentPlayer=="x"){
                message.textContent = player1 + " congratulations you won!";
            }else{
                message.textContent = player2 + " congratulations you won!";
            }

            return true;
        }
    }

    return false;
}//your JS code here. If required.
