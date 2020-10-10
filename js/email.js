function Email() {
  var email = form1.email.value;

  if (email != "") {
    alert("o email " + email + " foi cadastrado");
  }
}

function checarEmail() {
  if (
    form1.email.value == "" ||
    form1.email.value.indexOf("@") == -1 ||
    form1.email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe um E-MAIL válido!");
    return false;
  }
}
