const resultado = () => {

    const alCuadrado = () => {
        let arreglo = [];

        for (let i = 1; i < 50; i++) {
            let resultado = Math.pow(i, 2);

            arreglo.push(resultado);
        }

        return arreglo;
    }

    document.getElementById('id').innerHTML = alCuadrado();
}