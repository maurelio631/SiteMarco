var tabela = document.querySelector("table");
var formulario = document.querySelector("form");
var nome;
var dataNasc;

var Usuario = {
    Id: 0,
    Nome: "",
    Usuario: "",
    DataNasc: "",
    Idade: ""
};

var pesquisaInput = document.querySelector("#pesquisa");
pesquisaInput.addEventListener("input", function() {

    var tBody = tabela.querySelector("tbody");
    var usuariosTr = tBody.querySelectorAll("tr");

    for (var i = 0; i < usuariosTr.length; i++) {
        var tDs = usuariosTr[i].querySelectorAll("td");

        var expressao = new RegExp(pesquisaInput.value, "i");

        if (expressao.test(tDs[1].textContent)) {
            usuariosTr[i].classList.remove("invisivel");
            console.log(tDs[1].textContent + " encontrado");
        } else {
            usuariosTr[i].classList.add("invisivel");
            console.log("Não encontrado");
        }

    }

    console.log(usuariosTr);

});

tabela.addEventListener("dblclick", function(evt) {

    var alvoEvento = evt.target;
    var paiDoAlvo = alvoEvento.parentNode;

    var usuarios = paiDoAlvo.querySelectorAll("td");
    nome = formulario.querySelector("#nome");
    dataNasc = formulario.querySelector("#dataNasc");

    nome.value = usuarios[1].textContent;

    var dataEng = usuarios[3].textContent.split("/");

    dataNasc.value = dataEng[2] + "-" + dataEng[1] + "-" + dataEng[0];

});


var btnFormulario = formulario.querySelector("button");

formulario.addEventListener("submit", function(evt) {

    var totalUsuarios = tabela.querySelector("#total-usuarios")
    nome = formulario.querySelector("#nome").value;
    dataNasc = formulario.querySelector("#dataNasc").value;

    Usuario.Nome = nome;
    Usuario.Usuario = nome.toLowerCase();

    ConverteIdade(dataNasc);
    CriaLinhaTabela();

    totalUsuarios.textContent = Usuario.Id;

    formulario.reset();

    evt.preventDefault();
});

function ConverteIdade(dataNasc) {
    var dataQuebrada = dataNasc.split("-");
    var dataPtBr = dataQuebrada[2] + "/" + dataQuebrada[1] + "/" + dataQuebrada[0];

    Usuario.DataNasc = dataPtBr;

    var dataAtual = new Date();

    var idade = dataAtual.getFullYear() - dataQuebrada[0];

    Usuario.Idade = idade;
}

function CriaLinhaTabela() {
    var tBody = tabela.querySelector("tbody");

    Usuario.Id = tBody.querySelectorAll("tr").length + 1;

    var tR = document.createElement("tr");

    var tDNome = document.createElement("td");
    tDNome.textContent = Usuario.Nome;
    var tDUsuario = document.createElement("td");
    tDUsuario.textContent = Usuario.Usuario;
    var tDDataNasc = document.createElement("td");
    tDDataNasc.textContent = Usuario.DataNasc;
    var tDIdade = document.createElement("td");
    tDIdade.textContent = Usuario.Idade;
    var tDId = document.createElement("td");
    tDId.textContent = Usuario.Id;

    tR.appendChild(tDId);
    tR.appendChild(tDNome);
    tR.appendChild(tDUsuario);
    tR.appendChild(tDDataNasc);
    tR.appendChild(tDIdade);

    tBody.appendChild(tR);
    console.log(tBody);
}