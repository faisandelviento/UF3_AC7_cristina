/// CRISTINA CLAVER 
/// UF3 AC7

let calculo = []

window.onload = function () {

    botones = document.getElementsByClassName('bnum');
    for (boton of botones){
        boton.addEventListener('click',pintarNumero);
    }

    botonOperaciones =document.getElementsByClassName('bope')
    for (const operacion of botonOperaciones){
        operacion.addEventListener('click',Calcula)
    }

}

function pintarNumero(event){
    let num1 = document.getElementById('num1');
    if (num1.innerHTML == "--"){
        num1.innerHTML = event.target.id[2];
    }
    else{
        num1.innerHTML = num1.innerHTML + event.target.id[2];
    }
}

function Calcula(event) { 
    //Pq no utilizo funciones: no puedo modificar el valor global de calculo []
    //desde dentro de una funcion
    console.log(event.target.id)
    if(event.target.id =="clear"){
        Clear()
        //borrar operacion
        calculo = []
    }
    else if(event.target.id =="result"){
        let inputNumeros = document.getElementById('visorNum1').textContent
        calculo.push(inputNumeros)
        let calculoJoin = calculo.join()///une la lista a un solo string pero pone , entre cada posicion
        let calcuoLimpio= calculoJoin.replace(',','')//quitar comas
        document.getElementById('resultado').textContent= eval(calcuoLimpio)//eval hace el calculo de una string

    }
    else{
        let inputNumeros = document.getElementById('visorNum1').textContent
        let num2 = document.getElementById('num2');
        let num1 = document.getElementById('num1');
        let operacion= event.target.textContent 
        num2.innerHTML= operacion //7escribes el signo de la operacion
        calculo.push(inputNumeros + operacion) //añades el numero que se ha escrito + el signo en un array
        num1.innerHTML= "--" //limpias el texto de la calculadora
    }
}

function Clear(){
    //borrar texto calculadora
    let num2 = document.getElementById('num2');
    let num1 = document.getElementById('num1');
    let res = document.getElementById('resultado');
    num1.innerHTML= "--"
    num2.innerHTML= "--" 
    res.innerHTML= "--" 

}








