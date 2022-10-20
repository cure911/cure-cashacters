var maleButton = document.querySelector(".male-button");
var femaleButton = document.querySelector(".female-button");
var maleImage = document.querySelector(".male-image");
var femaleImage = document.querySelector(".female-image")
var genderTextP = document.querySelector(".gender-text-p");

maleButton.onclick = function(){
    maleImage.style.filter = "none";
    femaleImage.style.filter = "grayscale(100%)";
    genderTextP.innerHTML = "MALE"
}

femaleButton.onclick = function(){
    femaleImage.style.filter = "none";
    maleImage.style.filter = "grayscale(100%)";
    genderTextP.innerHTML = "FEMALE"
}

var nextStepFirstSpan = document.querySelector(".next-step-first-span");

var firstStepNext = document.querySelector(".first-step-next");
var firstStep = document.querySelector(".first-step");

var twoStepCancel = document.querySelector(".two-step-cancel");
var twoStepNext = document.querySelector(".two-step-next");
var twoStep = document.querySelector(".two-step");

var thirdStep = document.querySelector(".third-step");
var thirdStepCancel = document.querySelector(".third-step-cancel");


firstStepNext.onclick = function(){
    if(femaleImage.style.filter == "grayscale(100%)" || maleImage.style.filter == "grayscale(100%)"){
        firstStep.style.display = "none";
        twoStep.style.display = "block";
    }
}

var nameInput = document.querySelector(".name-input");
var surnameInput = document.querySelector(".sirname-input");
var birtInput = document.querySelector(".birt-input");
var nationInput = document.querySelector(".nation-input");

twoStepCancel.onclick = function(){
    twoStep.style.display = "none";
    firstStep.style.display = "block";
}

twoStepNext.onclick = function(){
    if(nameInput.value == "" || surnameInput.value == "" || birtInput.value == "" || nationInput.value == ""){
        
    } else{
        twoStep.style.display = "none";
        thirdStep.style.display = "block";
    }
}

thirdStepCancel.onclick = function(){
    thirdStep.style.display = "none";
    twoStep.style.display = "block";
}