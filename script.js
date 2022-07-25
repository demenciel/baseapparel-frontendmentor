var emailForm = document.getElementById('emailForm');
var input = document.getElementById('email');
var error = document.getElementById('error');
var trueEmail = document.getElementById('trueEmail');
var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function ValidateEmail() {
  if (input.value.match(mailformat)) {
    trueEmail.style.display = 'block';
    input.style.borderColor = 'green';
    error.style.display = 'none';
    return true
  }
  else {
    error.style.display = 'block';
    input.style.borderColor = 'red';
    trueEmail.style.display = 'none';
    input.reset();
    return false;
  }
}