//GET, POST , PUT Y DELETE

function getReservaciones(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postReservaciones(){
    let cajas = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
    };
    console.log(cajas);
    
    $.ajax({
        url:"http://192.9.135.62:8080/api/Reservation/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la reservacion");
            window.location.reload();
        }
    });

}

function putReservaciones(){

}
function deleteReservaciones(){
    
}


/////////////////////////////////////

function getReservaciones_Car(){
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

function getReservaciones_Client(){
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
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].startDate+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].devolutionDate+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].status+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].car.name+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].car.brand+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].client.name+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].client.email+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='putReservaciones("+items[i].idReservaciones+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>  Actualizar </button> " ;
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='deleteReservaciones("+items[i].idReservaciones+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}