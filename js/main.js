// declare variables
let nbr = document.querySelectorAll('.nbr');
let operation = document.querySelectorAll('.operat');
let btnEgale = document.querySelector('.btngale');
let nbr1 = document.querySelector('.nbr1');
let op = document.querySelector('.op');
let nbr2 = document.querySelector('.nbr2');
let affRes = document.querySelector('.affichage');
let res = 0;

// functions for calcul
function somme(nbr1,nbr2){
    return nbr1 + nbr2;
}
function division(nbr1,nbr2){
    if(nbr2 == 0){
        return "error math";
    }
    else{
        return nbr1 / nbr2;
    }
}
function multiplication(nbr1,nbr2){
    return nbr1 * nbr2;
}
function sousTraction(nbr1,nbr2){
    return nbr1 - nbr2;
}
function modulo(nbr1,nbr2){
    return nbr1 % nbr2;
}

// function operate for click sur egale 
function operate(nbr1,nbr2){
    if(op.innerHTML == '*'){
        res = multiplication(nbr1,nbr2);
        return res;
    }
    else if(op.innerHTML == '+'){
        res = somme(nbr1,nbr2);
        return res;
    }
    else if(op.innerHTML == '/'){
        res = division(nbr1,nbr2);
        return res;
    }
    else if(op.innerHTML == '-'){
        res = sousTraction(nbr1,nbr2);
        return res;
    }
    else if(op.innerHTML == '%'){
        res = modulo(nbr1,nbr2);
        return res;
    }
}

// calcul operation
btnEgale.addEventListener("click",function(){
    res = operate(Number(nbr1.innerHTML),Number(nbr2.innerHTML));
    affRes.innerHTML = res;
});

// click numbers
nbr.forEach(value => {
    value.addEventListener("click",function(){
        if(op.innerHTML == '*' || op.innerHTML == '-' || op.innerHTML == '+' || op.innerHTML == '/' || op.innerHTML == '%'){
            nbr2.innerHTML += value.innerHTML;
        }
        else{
            nbr1.innerHTML += value.innerHTML;
            if (nbr1.innerHTML[0] == 0){
                nbr1.innerHTML = parseFloat(nbr1.innerHTML);
            }
        }
    })
});

//click operation 
operation.forEach(value => {
    value.addEventListener("click",function(){
        if(op.innerHTML === "+" || op.innerHTML === "*" || op.innerHTML === "-" || op.innerHTML === "/" || op.innerHTML === "%"){
            if(affRes.innerHTML == "error math"){
                alert("error math");
            }
            else if(nbr1.innerHTML == 0 && op.innerHTML != "-"){
                op.innerHTML = value.innerHTML;
            }
            else{
                result = operate(Number(nbr1.innerHTML),Number(nbr2.innerHTML));
                affRes.innerHTML = result;
                document.querySelector('.nbr1').innerHTML = "";
                document.querySelector('.nbr2').innerHTML = "";
                document.querySelector('.op').innerHTML = "";
                nbr1.innerHTML = result;
                op.innerHTML = value.innerHTML;
            }
        }
        else if(nbr1.innerHTML == 0){
            switch(value.innerHTML){
                case "+":
                break;
                case "/":
                break;
                case "*":
                break;
                case "%":
                break;
                case "-":
                    nbr1.innerHTML = "";
                    op.innerHTML = "-";
                break;
            }
        }
        else{
            op.innerHTML = value.innerHTML;
        }
    })
});

// null all content
document.querySelector('.vider').addEventListener("click",function(){
    document.querySelector('.nbr1').innerHTML = "0";
    document.querySelector('.nbr2').innerHTML = "";
    document.querySelector('.op').innerHTML = "";
    document.querySelector('.affichage').innerHTML = "";
})

// delet number
document.querySelector('.delete').addEventListener("click",function(){
    if(!(nbr2.innerHTML == "")){
        nbr2.innerHTML = nbr2.innerHTML.slice(0,-1);
    }
    else if(nbr2.innerHTML == "" && !(op.innerHTML == "")){
        op.innerHTML = op.innerHTML.slice(0,-1);
    }
    else if(op.innerHTML == "" && nbr2.innerHTML == ""){
        nbr1.innerHTML = nbr1.innerHTML.slice(0,-1);  
    }
})