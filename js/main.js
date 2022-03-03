let nbrBtn = document.querySelectorAll(".nbr");
let viewNbr1 = document.querySelector(".nbr1");
let viewNbr2 = document.querySelector(".nbr2");
let op = document.querySelector(".op");
console.log(op);
let nbr1 = "";
let nbr2 = "";
for(let i =0; i<nbrBtn.length;i++){
    nbrBtn[i].addEventListener("click",function(){
        if(op = *){
            nbr2 = nbr2 + nbrBtn[i].innerHTML;
            viewNbr1.innerHTML = nbr2;
        }
        else{
            nbr1 = nbr1 + nbrBtn[i].innerHTML;
        viewNbr1.innerHTML = nbr1;
        }
    })
}