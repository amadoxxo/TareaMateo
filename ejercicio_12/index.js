const generar = () => {

    const resultado = () => {
        let numero = [ 3 ];
        for (let i = 3; i < 99; i) {
            i += 4;
            numero.push(i);
        }
        return numero;
    }


    document.getElementById('id').innerHTML = resultado();
}