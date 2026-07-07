// ================= APPLY SAVED THEME =================

function applySavedTheme(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

    }

}

applySavedTheme();

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:0.2

});

reveals.forEach((section)=>{

    observer.observe(section);

});
// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


// Name Validation

function validateName(){

    if(nameInput.value.trim().length < 3){

        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        nameError.textContent = "Name must be at least 3 characters.";

        return false;

    }

    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");

    nameError.textContent = "";

    return true;

}


// Email Validation

function validateEmail(){

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(emailInput.value.trim())){

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        emailError.textContent = "Enter a valid email address.";

        return false;

    }

    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    emailError.textContent = "";

    return true;

}


// Message Validation

function validateMessage(){

    if(messageInput.value.trim().length < 10){

        messageInput.classList.add("invalid");
        messageInput.classList.remove("valid");

        messageError.textContent =
        "Message must contain at least 10 characters.";

        return false;

    }

    messageInput.classList.remove("invalid");
    messageInput.classList.add("valid");

    messageError.textContent = "";

    return true;

}


// Real-Time Validation

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

messageInput.addEventListener("input", validateMessage);


// Form Submit

form.addEventListener("submit", function(e){

    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if(isNameValid && isEmailValid && isMessageValid){

        successMessage.textContent =
        "Message sent successfully!";

        setTimeout(function(){

            form.reset();

            successMessage.textContent = "";

            nameInput.classList.remove("valid");
            emailInput.classList.remove("valid");
            messageInput.classList.remove("valid");

        },3000);

    }

});


// Current Year

document.getElementById("year").textContent =
new Date().getFullYear();

// ================= DARK MODE =================

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click",function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }

    else{

        localStorage.setItem("theme","light");

    }

});