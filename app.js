let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winTxt = document.querySelector(".hide");

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

resetBtn.addEventListener("click", () =>{
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
        winTxt.classList.add("hide");
    })
})

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        boxes.forEach((box) => {
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val == pos2Val && pos2Val == pos3Val){
                    box.disabled = true;
                    winTxt.innerHTML = `The Winner is ${pos1Val}`;
                    winTxt.classList.remove("hide");
                }
            }
            else if(box.disabled == "true"){
                winTxt.innerHTML = "The Game is a DRAW";
                winTxt.classList.remove("hide");
            }
        })
    }
}
