
var form = document.getElementById("form");
form.onsubmit = function() {
  var txtEmail = document.getElementById('txt-email');
  var txtPwd = document.getElementById('txt-password');
  if (!txtPwd.value && !txtEmail.value) {
    alert("Veuillez saisir une adresse mail et un mot de passe");
  } else {
    if (!txtPwd.value)
      alert("Veuillez saisir un mot de passe");
    if (!txtEmail.value)
      alert("Veuillez saisir une adresse email valide");
  }
  return false;
};