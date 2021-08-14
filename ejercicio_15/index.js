const resultado = () => {

    const algoritmo = () => {

        let numero = [ 0 ];
        
        for (let i = 0; numero.length < 10; i) {
            
            let result = Math.pow(i, 2) + 1;
            i = result;
        
            numero.push(result);
        }
        return numero;
    }   

    document.getElementById('id').innerHTML = algoritmo();
}
