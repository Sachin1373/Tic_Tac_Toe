let boxes=document.querySelectorAll(".box")
const rstbtn=document.querySelector(".Reset")

let turnO=true

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       if(turnO){
        box.innerHTML="O"
        turnO=false
       }
       else{
        box.innerHTML="X"
        turnO=true
       }
       box.disabled=true

       checkwinner()
        
    })
})

const checkwinner = () =>{
     for (pattern of winpattern){
        pos1=boxes[pattern[0]].innerHTML
        pos2=boxes[pattern[1]].innerHTML
        pos3=boxes[pattern[2]].innerHTML

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 &&pos2==pos3){
                let winner=document.getElementById("result")
                winner.innerHTML=`The Winner is ${pos1}`
                return
                
                
            }
        }
     }
     if ([...boxes].every(box => box.innerHTML !== "")) {
        const winner = document.getElementById("result");
        winner.innerHTML = "It's a Draw!";
    }
}

rstbtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML=""
        box.disabled=false
    })
    document.getElementById("result").innerHTML=""
    turnO=true
})