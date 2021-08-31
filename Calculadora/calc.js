var val1;
var val2;
var result;

function suma() {
  var val1Element = document.getElementById("val1");
  var val2Element = document.getElementById("val2");

  val1 = val1Element.value;
  val2 = val2Element.value;

  result = parseInt(val1) + parseInt(val2);


  var printElement = document.getElementById("resultado");
  printElement.innerHTML = '<h3>' + 'El resultado es = ' + result + '</h3>';

}

function resta() {
  var val1Element = document.getElementById("val1");
  var val2Element = document.getElementById("val2");

  val1 = val1Element.value;
  val2 = val2Element.value;

  result = val1 - val2;


  var printElement = document.getElementById("resultado");
  printElement.innerHTML = '<h3>' + 'El resultado es = ' + result + '</h3>';

}

function multiplicacion() {
  var val1Element = document.getElementById("val1");
  var val2Element = document.getElementById("val2");

  val1 = val1Element.value;
  val2 = val2Element.value;

  result = val1 * val2;


  var printElement = document.getElementById("resultado");
  printElement.innerHTML = '<h3>' + 'El resultado es = ' + result + '</h3>';

}

function division() {
  var val1Element = document.getElementById("val1");
  var val2Element = document.getElementById("val2");

  val1 = val1Element.value;
  val2 = val2Element.value;

  result = val1 / val2;


  var printElement = document.getElementById("resultado");
  printElement.innerHTML = '<h3>' + 'El resultado es = ' + result + '</h3>';

}



