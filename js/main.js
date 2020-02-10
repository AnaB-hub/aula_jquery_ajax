// alert("funcionou");

function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("CEP: " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
