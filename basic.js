
// target elements in HTML document
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let msg = document.querySelector("#msg");
let errorName = document.querySelector("#errorname");
let errorEmail = document.querySelector("#erroremail");
let errorMessage = document.querySelector("#errormessage");
let time = document.querySelector("#time");
let form = document.querySelector("#contactForm");


// function executes when button is pressed
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
    
})

// function executes when enter is pressed
form.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        validateInput();
      }
})

function validateInput(){

    let cph = "@cphbusiness.dk";

    //currentTime gives us an object with date and time
    let currentTime = new Date();
    //getDay() takes the current day and outputs it as a number
    let currentDay = currentTime.getDay();

    //trim() removes trailing and leading whitespace 
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let msgValue = msg.value.trim();


    //toggle css classes
    username.classList.toggle("errorstyle");
    username.classList.toggle("successstyle");

    email.classList.toggle("errorstyle");
    email.classList.toggle("successstyle");
    
    msg.classList.toggle("errorstyle"); 
    msg.classList.toggle("successstyle"); 

    //username validation - a minimum length of 3 characters is required
    if(usernameValue.length >= 3){
        console.log(usernameValue);
        username.classList.remove("errorstyle");
        username.classList.add("successstyle");
        errorName.innerHTML = " ";
    }else{
        username.classList.remove("successstyle");
        username.classList.add("errorstyle");
        errorName.innerHTML= "Your name should be at least 3 characters long";
    }

    //email validation - needs to contain the variable cph (string "@cphbusiness.dk")  
    if(emailValue.includes(cph)){
        email.classList.remove("errorstyle");
        email.classList.add("successstyle");
        errorEmail.innerHTML = " ";
    }else{
        email.classList.remove("successstyle");
        email.classList.add("errorstyle");
        errorEmail.innerHTML= "Email doesn't contain <i>@cphbusiness.dk</i>";
    }

    //message validation - a minimum length of 8 characters is required
    if(msgValue.length >= 8){
        msg.classList.remove("errorstyle");
        msg.classList.add("successstyle");
        errorMessage.innerHTML = " ";
        return true;
    }else{
        msg.classList.remove("successstyle");
        msg.classList.add("errorstyle");
        errorMessage.innerHTML= "Your message should be at least 8 characters long";
   
    }

    //time validation - form unable to submit on Friday (5), Saturday (6) and Sundays (7)
    if(currentDay === 5 || currentDay === 6 || currentDay === 7){
        time.innerHTML= "<i> We do not accept submissions on Friday, Saturday or Sundays</i>";
    }else{
        
    }
} 

