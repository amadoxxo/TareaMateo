const resultado = () => {

    const numeroDias = () => {

        const days = document.getElementById('dias').value;

        let anios = days/365;
        let meses = days/30.417;
        let semanas = days/7;
        
        let prueba = `años: ${anios} <br>  
                      meses: ${meses} <br>
                      semanas: ${semanas} <br>
                      dias: ${days} <br>`;

        return prueba;

    } 


    document.getElementById('id').innerHTML = numeroDias();
}