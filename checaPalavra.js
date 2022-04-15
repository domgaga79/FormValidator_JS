function checaPalavra() {
    //alert("olá");
    var texto = document.getElementById("texto").value;
    var palavra = document.getElementById("palavra").value;
    var res = document.getElementById("res");
    
    var posicao = texto.indexOf(palavra);

    if (posicao == -1){
        res.value = "Não achou!";
    } else { 
        res.value = posicao;
    }
}
