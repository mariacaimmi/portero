let visor = '', depto = '', m = '';
//var aNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const apretandoNum = (num1) => {  
    if (visor.length < 2) {
        visor = visor + `${num1}`;
        document.getElementById('piso').value = visor;
    } else if(depto.length < 1){
        depto = depto + `${num1}`;
         document.getElementById('depto').value = depto;  
    }
}


const borrar = () => {
    visor = '', depto = '', m = '';
    document.getElementById('piso').value = visor;
    document.getElementById('depto').value = depto;
    document.getElementById('llamado').value = m;
}

const Llamar = () => {
    
    if(parseInt(visor) <= 42){
        m += `LLamando al piso ${visor} depto ${depto}`;
         document.getElementById('llamado').value = m;
    } else {
        m += 'El piso no existe';
        document.getElementById('llamado').value = m;
    }
  
}

