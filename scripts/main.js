const startButton = document.getElementById('startButton');
const startWindow = document.getElementById('startWindow');
const mainContainer = document.getElementById('mainContainer');
const displayAnswer = document.getElementById('displayAnswer');
const allButtons = document.getElementById('allButtons');

let startAnswer = "";
let answer = "";
let buttonValue = "";
let totalDisplayNumber = "";
let inputList = [];
let posSecondRecentInput = "";
let calcButton = "";
let calcFirstValue = 0;
let calcLastValue = 0;
let operator = "";

startButton.addEventListener('click', function(event) {
    startWindow.style.display = "none";
    mainContainer.style.display = "flex";
    });

displayAnswer.textContent = startAnswer; // set start answer to none

// if a sequence of calculations is wanted, press "=" after each calculation for it to work properly
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
            console.log("inputList:" + inputList);
            console.log("calcFirstValue:" + calcFirstValue);
            console.log("calcLastValue:" + calcLastValue);

            if (operator == "+"){
                answer = Number(calcFirstValue) + Number(calcLastValue);
                totalDisplayNumber = answer.toFixed(3);
                console.log("additionAnswer:" + answer);
            }
            else if (operator == "-"){
                answer = Number(calcFirstValue) - Number(calcLastValue);
                totalDisplayNumber = answer.toFixed(3);
                console.log("subtractionAnswer:" + answer);
            }
            else if (operator == "/"){
                answer = Number(calcFirstValue) / Number(calcLastValue);
                totalDisplayNumber = answer.toFixed(3);
                console.log("divisionAnswer:" + answer); 
            }
            else if (operator == "x"){
                answer = Number(calcFirstValue) * Number(calcLastValue);
                totalDisplayNumber = answer.toFixed(3);
                console.log("multiplicationAnswer:" + answer);
            }
            else {
                console.log("error in calcuation");
            }

            inputList.push(answer);
            console.log("addedAnswerInputList:" + inputList)

            // TODO: push each inserted value to inputList to do multiple calculations at once?
    }
}
}); 

function updateDisplayAnswer() {
    displayAnswer.textContent = totalDisplayNumber;
}

setInterval(updateDisplayAnswer, 500); // run the update display function every 0.5 seconds