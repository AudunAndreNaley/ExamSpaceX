// COUNTDOWN-TIMER //

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2018 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


// NAVBAR-STYLING //

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


/* CONTACT-FORM-VALIDATION */


document.forms.test.name.addEventListener("blur", validateName); 
document.forms.test.phone.addEventListener("blur", validatePhone);  
document.forms.test.email.addEventListener("blur", validateEmail); 
document.forms.test.email2.addEventListener("blur", matchingEmail); 
document.forms.test.comment.addEventListener("keyup", validateComment); 

var validName = false;
var validPhone = false;
var validEmail = false;
var matchEmail = false;
var validComment = false;

function validateName() {
    //console.log("Validating name");
    var name = document.forms.test.name.value;
    var nameErrorElement = document.getElementById('name');
    if (name == "") {
        nameErrorElement.style.border="2px solid #8a3636";
        //var noName = "Vennligst fyll inn ditt navn!";
        //nameErrorElement.innerHTML = noName;
        validName = false;
    } else {
        nameErrorElement.style.border="none";
        nameErrorElement.innerHTML = "";
        validName = true;
    }  
    checkButton();
}

function validatePhone() {
    //console.log("Validating phone");
    var phone = document.forms.test.phone.value;
    var phoneErrorElement = document.getElementById('phone');
    phonenumber = phone.replace(/ /g,''); // Fjern alle spaces
    phonepattern = /^\d{8}$/;
    if (!phonepattern.test(phonenumber)) {
        phoneErrorElement.style.border="2px solid #8a3636";
        //var noPhone = "Vennligst fyll inn et gyldig telefonnummer!";
        //phoneErrorElement.innerHTML = noPhone;
        validPhone = false;
    } else {
        phoneErrorElement.style.border="none";
        phoneErrorElement.innerHTML = "";
        validPhone = true;
    }
    checkButton();
}

function validateEmail() {
    //console.log("Validating email");
    var email = document.forms.test.email.value;  
    var emailErrorElement = document.getElementById('email');
    // https://www.regular-expressions.info/email.html
    var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailpattern.test(email)) {
        emailErrorElement.style.border="2px solid #8a3636";
        //var noEmail = "Vennligst fyll inn en gyldig E-post!";
        //emailErrorElement.innerHTML = noEmail;
        validEmail = false;
    } else {
        emailErrorElement.style.border="none";
        emailErrorElement.innerHTML = "";
        validEmail = true;
    }
    checkButton();
}

function matchingEmail() {
    //console.log("Validating email2: match emails");
    var email = document.forms.test.email.value;  
    var email2 = document.forms.test.email2.value;  
    var email2ErrorElement = document.getElementById('email2');

    if (email != email2) {
        email2ErrorElement.style.border="2px solid #8a3636";
        //var diffEmail = "E-posten stemmer ikke!";
        //email2ErrorElement.innerHTML = diffEmail;
        matchEmail = false;
    } else {
        email2ErrorElement.style.border="none";
        email2ErrorElement.innerHTML = "";
        matchEmail = true;
    }
    checkButton();
}

function validateComment() {
    //console.log("Validating comment");
    var comment = document.forms.test.comment.value;    
    var commentErrorElement = document.getElementById('comment');

    if (comment == "") {
        commentErrorElement.style.border="2px solid #8a3636";
        //var noComment = "Her kan du skrive en melding til oss!";
        //commentErrorElement.innerHTML = noComment;
        validComment = false;
    } else {
        commentErrorElement.style.border="none";
        commentErrorElement.innerHTML = "";
        validComment = true;
    }
    checkButton();
}

function validateForm() {
    validateName();
    validatePhone();
    validateEmail();
    matchingEmail();
    validateComment();
    return validName && validPhone && validEmail && validComment && matchEmail;
}

function checkButton () {
    var btn = document.querySelector ("input[type='submit']");
    if (validName && validPhone &&  validEmail &&   validComment && matchEmail) 
    {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}




