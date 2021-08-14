const resultado = () => {

    const numeroImpar = () => {
        
        let i = 0;
        let arreglo = [];

        while (arreglo.length < 6) {
            i++;
            if (i%2 === 1) {
                let prueba = 2*7+i;

                arreglo.push(prueba);
                document.getElementById('valores').innerHTML = arreglo;
            }
        }
        const valor = arreglo.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);
        
        return valor;
    }

    document.getElementById('id').innerHTML = numeroImpar();
}