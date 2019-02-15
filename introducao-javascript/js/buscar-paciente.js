var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    console.log("buscando pacientes");

    // http://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });

    });
    
    xhr.send();

    

});