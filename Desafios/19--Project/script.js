let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");
let see = document.getElementById("messages")

pass.addEventListener('input', () => {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if(pass.value.length > 0){
    msg.style.display = "block";
  }
  else {
    msg.style.display = "none";
  }

  if(pass.value.length){
    if(!pass.value.match(lowerCaseLetters) || !pass.value.match(upperCaseLetters) || !pass.value.match(numbers)){
      str.innerHTML = "Weak - Password must include lowercase, uppercase, and numbers";
    }
    else if(pass.value.length < 6){
      msg.style.color = "green";
      pass.style.borderColor = "green";
    }
    else if(pass.value.length < 8){
      str.innerHTML = "Medium";
      msg.style.color = "yellow";
      pass.style.borderColor = "yellow";
    }
    else {
      str.innerHTML = "Strong";
      msg.style.color = "red";
      pass.style.borderColor = "red";
    }
  }
})


see.addEventListener('click', () => {
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});
