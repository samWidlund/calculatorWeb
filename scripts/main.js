const displayAnswer = document.getElementById('displayAnswer');
const allButtons = document.getElementById('allButtons');

let startAnswer = "";
let buttonValue = "";
let totalDisplayNumber = "";
let inputList = [];
let posSecondRecentInput = "";
let calcButton = "";
let calcFirstValue = 0;
let calcLastValue = 0;
let operator = "";

displayAnswer.textContent = startAnswer; // set start answer to none

allButtons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        buttonValue = event.target.textContent;
        totalDisplayNumber += buttonValue;
        displayAnswer.textContent = totalDisplayNumber;

        inputList.push(totalDisplayNumber);
        console.log("inputList:" + inputList);

        if (buttonValue == "+"){
            operator = "+";
            totalDisplayNumber = startAnswer;
            calcFirstValue = inputList[inputList.length - 2]; // set addition first value
        }

        else if (buttonValue == "-"){
            operator = "-";
            totalDisplayNumber = startAnswer;
            calcFirstValue = inputList[inputList.length - 2]; // set subtraction first value
        }

        else if (buttonValue == "/"){
            operator = "/";
            totalDisplayNumber = startAnswer;
            calcFirstValue = inputList[inputList.length - 2]; // set division first value
        }

        else if (buttonValue == "x"){
            operator = "x";
            totalDisplayNumber = startAnswer;
            calcFirstValue = inputList[inputList.length - 2]; // set multiplication first value
        }

        else if (buttonValue == "C"){
            totalDisplayNumber = startAnswer;
            inputList = [];
            console.log("cleared inputList:" + inputList);
        }

        else if (buttonValue == "="){
            calcLastValue = inputList[inputList.length - 2];

            console.log("operator:" + operator);
            console.log("calcFirstValue:" + calcFirstValue);
            console.log("calcLastValue:" + calcLastValue);

            if (operator == "+"){
                let answer = Number(calcFirstValue) + Number(calcLastValue);
                totalDisplayNumber = answer;
                console.log("additionAnswer:" + answer);
            }
            else if (operator == "-"){
                let answer = Number(calcFirstValue) - Number(calcLastValue);
                totalDisplayNumber = answer;
                console.log("subtractionAnswer:" + answer);
            }
            else if (operator == "/"){
                let answer = Number(calcFirstValue) / Number(calcLastValue);
                totalDisplayNumber = answer;
                console.log("divisionAnswer:" + answer); 
            }
            else if (operator == "x"){
                let answer = Number(calcFirstValue) * Number(calcLastValue);
                totalDisplayNumber = answer;
                console.log("multiplicationAnswer:" + answer);
            }
            else {
                console.log("error in calcuation");
            }
            // Append answer in inputList to sequence of calculations ?
    }
}
}); 

function updateDisplayAnswer() {
    displayAnswer.textContent = totalDisplayNumber;
}

setInterval(updateDisplayAnswer, 500); // run the update display function every 0.5 seconds