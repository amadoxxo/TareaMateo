const resultado = () => {

    let id = parseInt(document.getElementById('numero-input').value);

    const getFibonacci = (numero) => {

        const serie_numeros = [ numero, numero + 1 ];

        for (let i = 2; i < 10; i++) {
            serie_numeros[i] = serie_numeros[ i - 2 ] + serie_numeros[ i - 1 ];    
        }
        return serie_numeros;
    }

    document.getElementById('resultado').innerHTML = getFibonacci(id);
  }

