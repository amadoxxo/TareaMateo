const resultado = () => {

    const sucesiontres = () => {

        let arreglo = [ 5 ];
        for (let i = 5; arreglo.length < 10 ; i) {
            
            let resultado = i * 3;
            i = resultado;

            arreglo.push(resultado);
        }

        return arreglo;
    }


    document.getElementById('id').innerHTML = sucesiontres();
}