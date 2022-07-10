const botao = document.querySelector("#botao01");
    const botao2 = document.querySelector("#botao02");
    const botao3 = document.querySelector("#botao03");
    const botao4 = document.querySelector("#botao04");
    const botao5 = document.querySelector("#botao05");

    let fatorial = () => {
      const resp = document.querySelector("#questao01-resp01");

      let valor = document.querySelector("#questao01-input01").value;
      for (i = valor - 1; i >= 1; i--) {
        valor = valor * i;
      }
      resp.innerHTML = `Resposta = ${valor}`;
    };

    let imprimir = () => {
      const resp = document.querySelector("#questao02-resp01");
      resultado = 0;
      for (i = 1; i <= 30; i++) {
        resultado = Math.pow(4, i);
        resp.innerHTML += `<br>4 elevado a ${i} = ${resultado} <br>`;
      }
    };

    let soma = () => {
      const resp = document.querySelector("#questao03-resp01");
      resultado = 0;
      for (i = 0; i <= 1000; i += 2) {
        resultado += i;
        console.log(i);
      }
      resp.innerHTML = `Resposta = ${resultado}`;
    };

    let fibonacci = () => {
      const resp = document.querySelector("#questao04-resp01");
      resultado = 0;
      resp.innerHTML = `A1 => 0+1 = 1 <br><br> A2 => 1+1 = 2 <br>`;
      a = 2;
      b = 1;
      for (i = 3; i <= 100; i++) {
        j = a + b;
        resp.innerHTML += `<br>A${i} => ${b}+${a} = ${j}<br>`;
        b = a;
        a = j;
      }
    };

    let primo = () => {
      const resp = document.querySelector("#questao05-resp01");
      resp.innerHTML = `Sequência de primos entre 2 e 1000: <br>`;
      for (i = 2; i <= 1000; i++) {
        a = 0;
        for (j = 1; j <= i; j++) {
          if (i % j == 0) {
            a++;
          }
        }
        if (a == 2) {
          resp.innerHTML += `${i} |`;
        }
      }
    };

    botao.addEventListener("click", () => {
      fatorial();
    });
    botao2.addEventListener("click", () => {
      imprimir();
    });
    botao3.addEventListener("click", () => {
      soma();
    });
    botao4.addEventListener("click", () => {
      fibonacci();
    });
    botao5.addEventListener("click", () => {
      primo();
    });
  </script>
</html>

<style>
  body {
    max-width: 600px;
    margin: auto;
  }

  .exercicio {
    border: 1px solid black;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
  }

  h1 {
    text-align: center;
  }