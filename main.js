var colors=generateRandomColors(6);
var numsquares=6;

var pickedColor=pickColor();

var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#displayMessage");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#resetButton");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    resetButton.textContent="New Color";
    messageDisplay.textContent="";
    h1.style.backgroundColor="steelblue";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numsquares=3;
    colors=generateRandomColors(numsquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i =0 ; i < squares.length ;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});


hardBtn.addEventListener("click",function(){
    resetButton.textContent="New Color";
    messageDisplay.textContent="";
    h1.style.backgroundColor="steelblue";
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares=6;
    colors=generateRandomColors(numsquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i =0 ; i < squares.length ;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }

});

resetButton.addEventListener("click",function(){
     // generate new random color
    colors=generateRandomColors(numsquares);
    // again pick a color
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    //assign the color to the square
    for(var i=0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    resetButton.textContent="New Color";
});

colorDisplay.textContent=pickedColor;

for(var i = 0; i < squares.length; i++){
    // Slecting a square and assigning them a color
    squares[i].style.backgroundColor = colors[i];
    //Giving a event to the selected square
    squares[i].addEventListener("click",function(){
        // making a variable to get the clicked color
        var clickedColor= this.style.backgroundColor;
        //comparing it to thre picked color
        if(pickedColor === clickedColor){
            messageDisplay.textContent="Correct !";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again?";
        }        
        else{
            messageDisplay.textContent="Try Again !";
            this.style.backgroundColor="#232323";
        }
    });
}

function changeColor(color){
    // grab all the square
    for(var i=0;i < squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

// this is to randomly choose a color
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr =[];
    //repeat num time
    for(var i=0;i<num;i++){
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var red=Math.floor(Math.random()*256);
    //pick a green from 0 to 255
    var green=Math.floor(Math.random()*256);
    //pick a blue from 0 to 255 
    var blue=Math.floor(Math.random()*256);
    
    return "rgb(" + red + ", "+ green +", "+ blue + ")" ;
}
