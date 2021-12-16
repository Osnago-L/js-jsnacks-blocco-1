// SNACK 1

function snack1(){
    document.getElementById("snack3").innerHTML ="";
    let snack1Array=[];
    let somma = 0;
    do{
        let number = parseInt(prompt("ïnserisci un numero..."))
        somma = somma + number
        snack1Array.push(number);
    }while (somma < 50)

    document.getElementById("snack3").innerHTML = somma;
};

function snack2(){
    document.getElementById("snack3").innerHTML ="";
    let number = parseInt(prompt("ïnserisci un numero..."))
    let stringRandom = [];
    let arrayMatrix = [];
    for ( index = 0; index < number; index++) {
        for ( i = 0; i < 10; i++) {
            let mathRandom = Math.floor(Math.random()*100+1)
            arrayMatrix.push(mathRandom);
        }
        stringRandom.push(arrayMatrix)
        arrayMatrix = [];
        document.getElementById("snack3").innerHTML += `<div>${stringRandom[index]}</div>`
    }

    
};

function snack3(){
    document.getElementById("snack3").innerHTML ="";
    let daddyDiv = document.getElementById("snack3");
    let divRed = document.createElement("div");
    let divGreen = document.createElement("div");
    daddyDiv.append(divRed);
    daddyDiv.append(divGreen);
    divRed.style.color= "red";
    divGreen.style.color= "green";

    const arrayTest = [0,1,2,3,4,5,6,7,8,9,10];
    let arrayRed = [];
    let arrayGreen = [];

    for (let index = 0; index < arrayTest.length; index++) {
        if (arrayTest[index]%2==0){
            arrayGreen.push(arrayTest[index])
        }else{
            arrayRed.push(arrayTest[index])
        }
        
    }
    divRed.innerHTML= arrayRed;
    divGreen.innerHTML= arrayGreen;
};