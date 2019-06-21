function Enviar() {
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    if (nome.value && email.value != "") {
        alert('Obrigado ' + nome.value + ' seu interesse foi registrado, entrarei em contato em breve');
    }
}