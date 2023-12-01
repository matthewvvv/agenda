function adicionarTarefa() {
    // cria referência ao campo de entrada de dados
    var inTarefa = document.getElementById("inTarefa");
    var tarefa = inTarefa.value; // obtém o conteúdo digitado
    // se não informou
    if (tarefa == "") {
      alert("Informe a tarefa"); // exibe alerta
      inTarefa.focus(); // posiciona no campo inTarefa
      return; // retorna
    }
    // cria referência ao elemento divQuadro (local onde tag h5 será inserida)
    var divQuadr = document.getElementById("divQuadro");
    var h5 = document.createElement("h5"); // cria o elemento HTML h5
    var texto = document.createTextNode(tarefa); // cria um texto
    h5.appendChild(texto); // define que o texto será filho de h5
    divQuadro.appendChild(h5); // ...e que h5 será filho de divQuadro
    inTarefa.value = ""; // limpa o campo de edição
    inTarefa.focus(); // jogo o cursor neste campo
  }
  // cria referência ao btAdicionar e após associa evento à função
  var btAdicionar = document.getElementById("btAdicionar");
  btAdicionar.addEventListener("click", adicionarTarefa);

  // ------------------
function selecionarTarefa() {

var h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página

var numH5 = h5.length; // obtém número de tags h5

if (numH5 == 0) {

// se zero...

alert("Não há tarefas para selecionar"); // exibe alertal

return; // retorna

}

var aux = -1; // variável auxiliar para indicar linha selecionada

// percorre a lista de elementos h5 inseridos na página

for (var i = 0; i < numH5; i++) {

// se tag é da class tarefaSelecionada (está selecionada)

if (h5[i].className == "tarefaSelecionada") {

h5[i].className = "tarefaNormal"; // troca para normal

aux = i; // muda valor da variável auxiliar

break; // sai da repetição

}

}

// se a linha que está selecionada é a última, irá voltar para a primeira

if (aux == numH5 - 1) {

aux = -1;

}

h5[aux + 1].className = "tarefaSelecionada"; // muda estilo da próxima tag h5

}

var btSelecionar = document.getElementById("btSelecionar");

btSelecionar.addEventListener("click", selecionarTarefa);

// -----------------

function recuperarTarefasSalvas() {

// verifica se há tarefas salvas no navegador do usuário

if (localStorage.getItem("tarefasDia")) {

// cria um vetor com a lista de tarefas (separadas pelo split(";"))

var tarefas = localStorage.getItem("tarefasDia").split(";");

// cria referência ao divQuadro (local onde as tags h5 serão inseridas)

var divQuadro = document.getElementById("divQuadro");

// percorre todas as tarefas

for (var i = 0; i < tarefas.length; i++) {

var h5 = document.createElement("h5"); // cria o elemento HTML h5

var texto = document.createTextNode(tarefas[i]); // cria um texto

h5.appendChild(texto); // define que o texto será filho de h5

divQuadro.appendChild(h5); // ...e que o h5 será filho de divQuadro

}

}

}

recuperarTarefasSalvas();
  