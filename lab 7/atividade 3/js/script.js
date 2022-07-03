function primo(a){
    for (let i = 2; i < a; i++)
    if(a % i == 0){
        return ("Nao é primo");
    } else return ("É primo");
 }
 
 
 document.querySelector("#calcular").addEventListener("click",function(){
     //alert("Arthur"); //quando clicar em calcular vc vai receber um alert
     let valorA = document.querySelector("#valorA").value;//value para o usuario inserir
    
         alert(primo(valorA));
 
 });