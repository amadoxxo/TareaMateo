const resultado = () => {

    const progresionGeometrica = () => {

        let arreglo = [];

        for (let i = 1; i > -2; i--) {
            let result = 1*Math.pow(2, 3-i);
            arreglo.push(result)
        }

        let resultado = arreglo.reduce((primerNumero, ultimoNumero) => primerNumero * ultimoNumero);

        document.getElementById('arreglo').innerHTML = arreglo;

        return resultado;
    }


    document.getElementById('id').innerHTML = progresionGeometrica();
}