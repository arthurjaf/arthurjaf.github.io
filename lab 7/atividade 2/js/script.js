function maior(a, b){
    if(a > b){
        return a;
    }else return b;
 }
 
 
 document.querySelector("#calcular").addEventListener("click",function(){
     //alert("Arthur"); //quando clicar em calcular vc vai receber um alert
     let valorA = document.querySelector("#valorA").value;//value para o usuario inserir
     let valorB = document.querySelector("#valorB").value;
 
     if(valorA.length > 0 && valorB.length > 0 ){
          //alert(parseInt(valorA)+ parseInt(valorB)); //parseint, funcao interna que converte para inteiro  
         alert(maior(valorA, valorB));
     }else alert("Digete os valores para o cálculo do maior");
    
 
 });