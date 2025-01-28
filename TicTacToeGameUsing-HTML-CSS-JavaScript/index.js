let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContanier = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContanier.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click",()  => {
          
        if(turnO){    //playerO
           box.innerText="O";
           turnO = false;
        } else{ //playerX
            box.innerText="X";
            turnO = false;
        }
        box.disabled = true; 

        checkWinner();    
    });
});
      const disabledBoxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
      };
      const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
      };

      const showWinner = (Winner) =>{
        msg.innerText = `Congratulations Winner is ${Winner}`;
        msgContanier.classList.remove("hide");
        disabledBoxes();
      };

      const checkWinner = () =>{
        for(let pattern of winPatterns) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos3val === pos3val){
                 showWinner(pos1val);
                 return true;

             
                } 
            }
         }
        };
      

      newGameBtn.addEventListener("click",resetGame);
      resetbtn.addEventListener("click",resetGame);

      