// VARIABLES

var cifra = document.querySelector('#decodificacao')
var incremento = document.querySelector('#incremento')
var codificar = document.querySelector('#codificar')
var decodificar = document.querySelector('#decodificar')
var btn = document.querySelector('#button')

var alfabeto =
  'abcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõçabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõç'

// àèìòùáéíóúâêîôãõç

//EVENTS
//Atualiza valor do incremento exibido
incremento.addEventListener('change', valorIncremento)
//Mostra o input de incremento quando 'cifra de césar é selecionado'
cifra.addEventListener('change', mostraIncremento)
//Altera o teto do botão para 'Codificar'
codificar.addEventListener('change', buttonTextCod)
//Altera o texto do botão para 'Decodificar'
decodificar.addEventListener('change', buttonTextDeCod)
//Exibe o resultado
btn.addEventListener('click', resultado)

//FUNCTIONS

function mostraIncremento() {
  if (cifra.value == 'cifraCesar') {
    document.querySelector('#incrementodiv').style.display = 'block'
  } else {
    document.querySelector('#incrementodiv').style.display = 'none'
  }
}

function valorIncremento() {
  document.querySelector('#rangevalue').value = incremento.value
}

function buttonTextCod() {
  if (codificar.checked) {
    btn.value = 'Codificar Mensagem!'
  }
}

function buttonTextDeCod() {
  if (decodificar.checked) {
    btn.value = 'Decodificar Mensagem!'
  }
}

function codificaCesar() {
  var textCode = document.querySelector('#text-input').value
  var textMinusculo = textCode.toLowerCase()
  var textoCodificadoCesar = ''

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = 0; j < alfabeto.length; j++) {
      if (textMinusculo[i] == alfabeto[j]) {
        textoCodificadoCesar += alfabeto[j + parseInt(incremento.value)]
        break
      } else if (textMinusculo[i] == ' ') {
        textoCodificadoCesar += ' '
        break
      }
    }
  }
  return textoCodificadoCesar
}

function decodificaCesar() {
  var textCode = document.querySelector('#text-input').value
  var textMinusculo = textCode.toLowerCase()
  var textoCodificadoCesar = ''

  for (var i = 0; i < textMinusculo.length; i++) {
    for (var j = alfabeto.length; j >= 0; j--) {
      if (textMinusculo[i] == alfabeto[j]) {
        textoCodificadoCesar += alfabeto[j - parseInt(incremento.value)]
        break
      } else if (textMinusculo[i] == ' ') {
        textoCodificadoCesar += ' '
        break
      }
    }
  }
  return textoCodificadoCesar
}

function codificaBase64() {
  var textCode = document.querySelector('#text-input').value
  var binario = btoa(textCode)
  return binario
}

function decodificaBase64() {
  var textCode = document.querySelector('#text-input').value
  var binario = atob(textCode)
  return binario
}

function resultado(e) {
  e.preventDefault()

  if (cifra.value == 'cifraCesar' && codificar.checked) {
    document.querySelector('#resultado').value = codificaCesar()
  } else if (cifra.value == 'cifraCesar' && decodificar.checked) {
    document.querySelector('#resultado').value = decodificaCesar()
  } else if (cifra.value == 'base64' && codificar.checked) {
    document.querySelector('#resultado').value = codificaBase64()
  } else {
    document.querySelector('#resultado').value = decodificaBase64()
  }
}
