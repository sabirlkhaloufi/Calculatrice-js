// declare variables
let nbr = document.querySelectorAll('.nbr');
let operation = document.querySelectorAll('.operat');
let result = document.querySelector('.btngale');
let nbr1 = document.querySelector('.nbr1');
let op = document.querySelector('.op');
let nbr2 = document.querySelector('.nbr2');
let affRes = document.querySelector('.affichage');
let delet = document.querySelector('.delete');
let res = 0;

// functions for calcul
function somme(nbr1,nbr2){
    return nbr1 + nbr2;
}
function addition(nbr1,nbr2){
    return nbr1 / nbr2;
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
        affRes.innerHTML = res;
    }
    else if(op.innerHTML == '+'){
        res = somme(nbr1,nbr2);
        affRes.innerHTML = res;
    }
    else if(op.innerHTML == '/'){
        res = addition(nbr1,nbr2);
        affRes.innerHTML = res;
    }
    else if(op.innerHTML == '-'){
        res = sousTraction(nbr1,nbr2);
        affRes.innerHTML = res;
    }
    else if(op.innerHTML == '%'){
        res = sousTraction(nbr1,nbr2);
        affRes.innerHTML = res;
    }
    else if(op.innerHTML == '%'){
        res = modulo(nbr1,nbr2);
        affRes.innerHTML = res;
    }
}

// calcul operation
result.addEventListener("click",function(){
    operate(Number(nbr1.innerHTML),Number(nbr2.innerHTML));
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
            op.innerHTML = value.innerHTML;
    })
});
// null all content
document.querySelector('.vider').addEventListener("click",function(){
    document.querySelector('.nbr1').innerHTML = "0";
    document.querySelector('.nbr2').innerHTML = "";
    document.querySelector('.op').innerHTML = "";
})

delet.addEventListener("click",function(){
    let array = Array.from(nbr1.innerHTML);
    console.log(array);
    for(let i = array.length-1;i>0;i--){
        array = array - array[array.length];
        break;
    }
    console.log(array);
})