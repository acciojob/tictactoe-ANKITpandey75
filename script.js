const submit = document.getElementById("submit");
const setup = document.getElementById("setup");
const game = document.getElementById("game");
const message = document.querySelector(".message");

let player1 = "";
let player2 = "";

let turn = "x";
let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
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

    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    setup.style.display="none";
    game.style.display="block";

    message.innerText = player1 + ", you're up";
});

const cells=document.querySelectorAll(".cell");

cells.forEach((cell,index)=>{

    cell.addEventListener("click",function(){

        if(gameOver) return;

        if(board[index]!="") return;

        board[index]=turn;

        cell.innerText=turn;

        if(checkWinner()){
            return;
        }

        if(turn==="x"){
            turn="o";
            message.innerText=player2 + ", you're up";
        }
        else{
            turn="x";
            message.innerText=player1 + ", you're up";
        }

    });

});

function checkWinner(){

    for(let pattern of winPatterns){

        let a=pattern[0];
        let b=pattern[1];
        let c=pattern[2];

        if(
            board[a]!="" &&
            board[a]===board[b] &&
            board[b]===board[c]
        ){

            gameOver=true;

            document.getElementById(String(a+1)).classList.add("selected");
            document.getElementById(String(b+1)).classList.add("selected");
            document.getElementById(String(c+1)).classList.add("selected");

            if(turn==="x"){
                message.innerText=player1 + ", congratulations you won!";
            }else{
                message.innerText=player2 + ", congratulations you won!";
            }

            return true;
        }
    }

    return false;
}