const typingArea = document.getElementById("typingArea");
const typingAreaPara = document.getElementById("typingAreaPara");
const displayCal = document.getElementById("displayCal");
const forEqual = document.getElementById("forEqual");
const contactNumber = document.getElementById("contactNumber");
const forCorrectNumber = document.getElementById("forCorrectNumber");
const forinCorrectNumber = document.getElementById("forinCorrectNumber");
const numPad1 = document.getElementById("numPad1");
const numPad2 = document.getElementById("numPad2");
const forWidthChecking = document.getElementById("forWidthChecking");

let calculationVar = "";
let counter = 0
function forCal(control){

if(document.documentElement.clientWidth >= 1000){

    if(control == "=" && forEqual.checked == false){


     for(let i = 0; i < calculationVar.length; i++){
        if(calculationVar[i] != '(' && calculationVar[i] != ')' && calculationVar[i] != '+'){
            ++counter;
        }
     }
     
     if(calculationVar.slice(0,5) == "(234)" || calculationVar.slice(0,3) == "234" || calculationVar.slice(0,4) == "+234"){
        console.log("Your Number is correct")
        contactNumber.innerText = calculationVar;
        forCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        typingArea.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "18vw";
        

     }

     else{
        console.log("Please enter correct number")
        forinCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "18vw";
        typingArea.style.display = "none";
     }
    } 

    else if(control == "=" && forEqual.checked == true){
        calculationVar = "";
        forCorrectNumber.style.display = "none"
        forinCorrectNumber.style.display = "none"
        typingAreaPara.innerText = calculationVar;  
        numPad1.style.display = "grid";  
        numPad2.style.display = "none";
        displayCal.style.height = "18vw";
        numPad1.style.borderTop = ".15vw solid rgb(222, 222, 222)";
    }

    else if(control == "X"){
        calculationVar = calculationVar.slice(0,-1);
        typingAreaPara.innerText = calculationVar;  
        if(calculationVar.length == 0) {
            displayCal.style.height = "18vw";
            typingArea.style.display = "none";
            numPad1.style.borderTop = ".15vw solid rgb(222, 222, 222)";
        }
    }

else{

    calculationVar += control;

    if(calculationVar.length != 0){
        typingArea.style.display = "flex"
        typingArea.style.display = "flex"
        numPad1.style.borderTop = "none"
        displayCal.style.height = "15.5vw";
    }

    typingAreaPara.innerText = calculationVar;    
    }
}


else if(document.documentElement.clientWidth >= 500 && document.documentElement.clientWidth<=999.99){

    if(control == "=" && forEqual.checked == false){


     for(let i = 0; i < calculationVar.length; i++){
        if(calculationVar[i] != '(' && calculationVar[i] != ')' && calculationVar[i] != '+'){
            ++counter;
        }
     }
     
     if(calculationVar.slice(0,5) == "(234)" || calculationVar.slice(0,3) == "234" || calculationVar.slice(0,4) == "+234"){
        console.log("Your Number is correct")
        contactNumber.innerText = calculationVar;
        forCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        typingArea.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "50vw";
        

     }

     else{
        console.log("Please enter correct number")
        forinCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "50vw";
        typingArea.style.display = "none";
     }
    } 

    else if(control == "=" && forEqual.checked == true){
        calculationVar = "";
        forCorrectNumber.style.display = "none"
        forinCorrectNumber.style.display = "none"
        typingAreaPara.innerText = calculationVar;  
        numPad1.style.display = "grid";  
        numPad2.style.display = "none";
        displayCal.style.height = "50vw";
        numPad1.style.borderTop = ".4vw solid rgb(222, 222, 222)";
    }

    else if(control == "X"){
        calculationVar = calculationVar.slice(0,-1);
        typingAreaPara.innerText = calculationVar;  
        if(calculationVar.length == 0) {
            displayCal.style.height = "50vw";
            typingArea.style.display = "none";
            numPad1.style.borderTop = ".4vw solid rgb(222, 222, 222)";
        }
    }

else{

    calculationVar += control;

    if(calculationVar.length != 0){
        typingArea.style.display = "flex"
        typingArea.style.display = "flex"
        numPad1.style.borderTop = "none"
        displayCal.style.height = "40vw";
    }

    typingAreaPara.innerText = calculationVar;    
    }
}


else if(document.documentElement.clientWidth < 500){

    if(control == "=" && forEqual.checked == false){


     for(let i = 0; i < calculationVar.length; i++){
        if(calculationVar[i] != '(' && calculationVar[i] != ')' && calculationVar[i] != '+'){
            ++counter;
        }
     }
     
     if(calculationVar.slice(0,5) == "(234)" || calculationVar.slice(0,3) == "234" || calculationVar.slice(0,4) == "+234"){
        console.log("Your Number is correct")
        contactNumber.innerText = calculationVar;
        forCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        typingArea.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "55vw";
        

     }

     else{
        console.log("Please enter correct number")
        forinCorrectNumber.style.display = "block"
        numPad1.style.display = "none";
        numPad2.style.display = "grid";
        displayCal.style.height = "55vw";
        typingArea.style.display = "none";
     }
    } 

    else if(control == "=" && forEqual.checked == true){
        calculationVar = "";
        forCorrectNumber.style.display = "none"
        forinCorrectNumber.style.display = "none"
        typingAreaPara.innerText = calculationVar;  
        numPad1.style.display = "grid";  
        numPad2.style.display = "none";
        displayCal.style.height = "55vw";
        numPad1.style.borderTop = ".4vw solid rgb(222, 222, 222)";
    }

    else if(control == "X"){
        calculationVar = calculationVar.slice(0,-1);
        typingAreaPara.innerText = calculationVar;  
        if(calculationVar.length == 0) {
            displayCal.style.height = "55vw";
            typingArea.style.display = "none";
            numPad1.style.borderTop = ".4vw solid rgb(222, 222, 222)";
        }
    }

else{

    calculationVar += control;

    if(calculationVar.length != 0){
        typingArea.style.display = "flex"
        typingArea.style.display = "flex"
        numPad1.style.borderTop = "none"
        displayCal.style.height = "43vw";
    }

    typingAreaPara.innerText = calculationVar;    
    }
}

}




