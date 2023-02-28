let firstButton=document.querySelector(".button-one");
let secondButton=document.querySelector(".button-two");
let thirdButton=document.querySelector(".button-three");
let firstAnswer=document.querySelector(".answer-one");
let secondAnswer=document.querySelector(".answer-two");
let thirdAnswer=document.querySelector(".answer-three");

/* 1: Let's make the click handler below together!*/
firstButton.onclick=function(){
    firstAnswer.style.display="block";
};



/* 2: Try to make it so that when you click the second button, an answer to the second question will appear*/
secondButton.onclick=function(){
    secondAnswer.style.display="block";
};


/* 3: Try to make the whole click handler for the third section! Make it so that when the user click the third button, an answer will appear! 



*/
thirdButton.onclick=function(){
    thirdAnswer.style.display="block";
};


