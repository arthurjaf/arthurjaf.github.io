const botao0 = document.querySelector("#botao00");
const botao = document.querySelector("#botao01");
const botao2 = document.querySelector("#botao02");
const botao3 = document.querySelector("#botao03");
const botao4 = document.querySelector("#botao04");
const botao5 = document.querySelector("#botao05");
const botao6 = document.querySelector("#botao06");
const botao7 = document.querySelector("#botao07");

let array1 = [];
document.querySelector("#array").innerHTML = "[]";
let array2 = [];
document.querySelector("#array2").innerHTML = "[]";

const getValor = () =>
  parseFloat(document.querySelector("#value01").value) || 0;
const getValor2 = () =>
  parseFloat(document.querySelector("#value02").value) || 0;
const getValor3 = () =>
  parseFloat(document.querySelector("#value03").value) || 0;

const reset = () => {
  document.querySelector("#array").innerHTML = "[]";
  array1 = [];
};
const reset2 = () => {
  document.querySelector("#array2").innerHTML = "[]";
  array2 = [];
};

const sum = (array) => {
  let soma = 0;
  for (i = 0; i < array.length; i++) {
    soma += array[i];
  }
  document.querySelector("#resp02").innerHTML = "Resultado: " + soma;

  return soma;
};

const sumOdds = (array) => {
  let soma = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      soma += array[i];
    }
  }
  document.querySelector("#resp03").innerHTML = "Resultado: " + soma;

  return soma;
};

const product = (array) => {
  let produto = 1;
  for (i = 0; i < array.length; i++) {
    produto *= array[i];
  }
  if (array.length > 0) {
    document.querySelector("#resp04").innerHTML = "Resultado: " + produto;
    return produto;
  } else {
    document.querySelector("#resp04").innerHTML = "Resultado: " + 0;
    return 0;
  }
};

const primo = (array) => {
  let primos = [];
  if (array.length == 1) {
    for (i = 2; primos.length < array[0]; i++) {
      a = 0;
      for (j = 1; j <= i; j++) {
        if (i % j == 0) {
          a++;
        }
      }
      if (a == 2) {
        primos[primos.length] = i;
      }
      document.querySelector("#resp05").innerHTML =
        "Resultado: " + primos;
    }
  } else {
    for (i = array[0]; i <= array[1]; i++) {
      a = 0;
      for (j = 1; j <= i; j++) {
        if (i % j == 0) {
          a++;
        }
      }
      if (a == 2) {
        primos[primos.length] = i;
      }
      document.querySelector("#resp05").innerHTML =
        "Resultado: " + primos;
    }
  }
};

botao0.addEventListener("click", () => {
  reset();
});
botao6.addEventListener("click", () => {
  reset2();
});

botao.addEventListener("click", () => {
  const valor = getValor();
  array1[array1.length] = valor;
  document.querySelector("#value01").value = "";
  document.querySelector("#array").innerHTML = "[" + array1 + "]";
});
botao5.addEventListener("click", () => {
  const valor = getValor2();
  if (array2.length <= 1) {
    array2[array2.length] = valor;
  } else {
    window.alert("Somente 2 números no array.");
  }
  document.querySelector("#value02").value = "";
  document.querySelector("#resp05").innerHTML = "Resultado: ";
  document.querySelector("#array2").innerHTML = "[" + array2 + "]";
});

botao2.addEventListener("click", () => {
  sum(array1);
});
botao3.addEventListener("click", () => {
  sumOdds(array1);
});
botao4.addEventListener("click", () => {
  product(array1);
});
botao7.addEventListener("click", () => {
  primo(array2);
});



/////////////////////////////////////////////////////
	
	const numberMap = {
		//Unidade
		0 : [
			 ''		//0
			,'I' 	//1
			,'II'	//2
			,'III'	//3
			,'IV'	//4
			,'V'	//5
			,'VI'	//6
			,'VII'	//7
			,'VIII'	//8
			,'IX'	//9				
		]
		//Dezena
		,1 : [
			 ''		//10
			,'X'	//10
			,'XX'   //20
			,'XXX'  //30
			,'XL'   //40
			,'L'    //50
			,'LX'   //60
			,'LXX'  //70
			,'LXXX' //80
			,'XC'   //90
		]
		,2 : [
			''
			,'C'	//100
			,'CC'   //200
			,'CCC'  //300				
			,'CD'   //400
			,'D'    //500
			,'DC'   //600
			,'DCC'  //700
			,'DCCC' //800
			,'CM' 	//900
		]
		,3 : [
			 ''
			,'M' //1000
		]
	};
	//Obs número maximo é 1999
	
	function romanJs(input){		
	
		input = input.replace(/[^0-9]/, "");
		if(input == '') return'';
		
		var number = parseInt(input);
		
		if(number > 1999){
			return "número maximo '1999'";
		}
		
	
		//Descobre se é Unidade, Dezena, Centana, Milhar
		var orderNumber = Number(input).toString();
		var orderLength = orderNumber.length;
		
		
		var unidadeDezenaCentena = orderLength - 1;
		
		
		var newOrder = '';
		for(var i = unidadeDezenaCentena; i >= 0 ;i--){
			newOrder = newOrder + orderNumber.charAt(i);
		}
		
		var finalCast = '';
		for(var i = unidadeDezenaCentena; i >= 0 ;i--){
			var auxVar = parseInt(newOrder.charAt(i));
			finalCast = finalCast + numberMap[i][auxVar];
		}
		
		return finalCast;
	}
	
	//var numberToCast = 100;
	//var result = romanJs(numberToCast);
	
	document.getElementById("decimal").addEventListener('keyup', function() {		
		var romanNumber = romanJs(this.value);
		
		document.getElementById("roman").value = romanNumber;
		
		var numberCheck = this.value.replace(/[^0-9]/, "");
		if(numberCheck == '') return false;
		
		var provaReal = 'http://numeracaoromana.babuo.com/'+ numberCheck + '-em-numeros-romanos';
		document.getElementById("prova-real-box").style = "display: block";
		document.getElementById("prova-real").href = provaReal;
		document.getElementById("prova-real").innerHTML  = 'Checar:' + numberCheck;
	});