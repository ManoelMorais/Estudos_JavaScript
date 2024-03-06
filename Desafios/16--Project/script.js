let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let subitError = document.getElementById("subit-error");


function validateName() {
  let name = document.getElementById("contact-name").value;

  if(name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}


function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if(phone.length == 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  if(phone.length !== 10) {
    phoneError.innerHTML = "Enter valid phone no.";
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}


function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if(email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter a valid email";
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}


function validateMessage() {
  let message = document.getElementById("contact-message").value;

  if(message.length == 0) {
    messageError.innerHTML = "Message is required";
    return false;
  }
  messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}


function validateForm() {
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    subitError.innerHTML = "Please fix error to submit";
    subitError.style.display = "block";
    setTimeout(function() {
      subitError.style.display = "none";
    }, 3000);
    return false;
  }
  subitError.innerHTML = "";
  return true;
}