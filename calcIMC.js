var tabela ; //declarando a variável fora da função para não dar conflito

//função para fazer ocalculo do IMC
function calcular() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var idade = document.getElementById("idade").value;

  //condição que não deixará o calculo acontecer se campos estiverem vazios
  if (altura === "" || peso === "" || idade === "") {
    alert("Preencha todos os campos para ver o resultado!");
  } else {
    var imc = peso / (altura * altura);

    switch (true) {
      case imc < 18.5:
        resultado = "magreza";
        tabela = document.getElementById("magreza");
        tabela.style.backgroundColor = "green";
        break;

      case imc >= 18.5 && imc <= 24.9:
        resultado = "normal";
        tabela = document.getElementById("normal");
        tabela.style.backgroundColor = "green";
        break;

      case imc >= 25 && imc <= 29.9:  
        resultado = "sobrepeso";
        tabela = document.getElementById("sobrepeso");
        tabela.style.backgroundColor = "rgb(255, 196, 0)";
        break;

      case imc >= 30 && imc <= 34.9:
        resultado = "obesidade grau I";
        tabela = document.getElementById("obesidade1");
        tabela.style.backgroundColor = "orange";
        break; 

      case imc >= 35 && imc <= 40:
        resultado = "obesidade grau II";
        tabela = document.getElementById("obesidade2");
        tabela.style.backgroundColor = "orangered";
        break;

      case imc > 40:
        resultado = "obesidade grau III";
        tabela = document.getElementById("obesidade3");
        tabela.style.backgroundColor = "red";
        break;

      default:
        resultado = "Outro resultado";
        tabela.style.backgroundColor = "green";
        break;
    }

    document.getElementById("resultado").innerHTML = imc.toFixed(2);
  }
}

function limpar() {
  // Limpa os campos de entrada
  document.getElementById('idade').value = '';
  document.getElementById('peso').value = '';
  document.getElementById('altura').value = '';

  // Limpa o resultado do IMC
  document.getElementById('resultado').innerHTML = '';

 
  
    // Restaura, a cor de fundo da tabela
    tabela.style.backgroundColor = ""; // Remove o estilo inline
  
  
}

