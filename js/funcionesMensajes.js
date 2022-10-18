//GET, POST , PUT Y DELETE

function getMensajes(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postMensajes(){
    if ($("#select-client").val().length == 0 || $("#select-car").val().length==0 || $("#messageText").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{
    let cajas = {
        messageText:$("#messageText").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
    };
    console.log(cajas);
    
    $.ajax({
        url:"http://192.9.135.62:8080/api/Message/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el mensaje");
            window.location.reload();
        }
    });
}

}

function putMensajes(){   
    
    }

function deleteMensajes(){
    
}

/////////////////////////////////////

function getMensajes_Car(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            let $select =$("#select-car");
            $.each(respuesta, function (id,name) {
                $select.append('<option value='+name.idCar+'>'+name.name+'</option>');
                //console.log(name);
            });
        }

    });

}

function getMensajes_Client(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            let $select =$("#select-client");
            $.each(respuesta, function (id,name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                //console.log(name);
            });
        }

    });

}

////////////////////////////////////////
function pintarRespuesta(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].messageText+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].car.name+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].car.brand+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].client.name+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].client.email+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='putMensajes("+items[i].idMensajes+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>  Actualizar </button> " ;
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='deleteMensajes("+items[i].idMensajes+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}