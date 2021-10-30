$(document).ready(function(){
//
// 
    //Crear variable para traer la api
    const url = "https://jsonplaceholder.typicode.com/posts"

    //Agregar un button para imprimir la info seleccionada
    $("#print").append("<button>Imprimir</button>");
    $("button").addClass("btn");

    //Evento click para imprimir la info seleccionada
    $(".btn").click(function (){
        //metodo get para obtener los datos 
        $.get(url,(info, status) => {
            if(status === "success"){
                //console.log(info)
                info.forEach(element => {
                    $("#print").append(
                    `<h1>${element.title}</h1>
                    <p>${element.body}</p>`)
                });
            }
        });
    });    
});