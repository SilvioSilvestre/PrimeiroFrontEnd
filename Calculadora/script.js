function soma() {
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    //console.log(typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2

}
    function sub() { 
        var numero3 = parseFloat(document.getElementById("n3").value)
        var numero4 = parseFloat(document.getElementById("n4").value)
        var resp = document.getElementById("respostaSub")
        //console.log(typeof numero1, typeof numero2)
        resp.innerHTML = numero3 - numero4
}
    function div() { 
        var numero5 = parseFloat(document.getElementById("n5").value)
        var numero6 = parseFloat(document.getElementById("n6").value)
        var resp = document.getElementById("respostaDiv")
        if(numero6 !== 0){
            document.getElementById("respostaDiv")
            resp.innerHTML = numero5 / numero6
        }else{
            alert("Não existe divisão por 0, animal!!!")
        }
        
    
    }
    function multi() { 
        var numero7 = parseFloat(document.getElementById("n7").value)
        var numero8 = parseFloat(document.getElementById("n8").value)
        var resp = document.getElementById("respostaMulti")
        //console.log(typeof numero1, typeof numero2)
        
        resp.innerHTML = numero7 * numero8
    }

    function porcentagem() {
    var valor = parseFloat(document.getElementById("n9").value)
    var porcento = parseFloat(document.getElementById("n10").value)
    var resp = document.getElementById("respostaPorc")

    var resultado = (valor * porcento) / 100
    resp.innerHTML = resultado
}