function traerReporteStatus(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarRespuestaStatus(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
     console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items.completed+" completado(s)</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items.cancelled+" cancelado(s)</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function traerReporteFechas(){
    let cajas = {
        
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
        car:{idCar: +$("#select-car").val()},
        client:{idClient: +$("#select-client").val()},
    };

    $.ajax({
        url:"http://192.9.135.62:8080/api/Reservation/report-dates/"+cajas.startDate+"/"+cajas.devolutionDate,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarRespuestaFecha(respuesta);
        }

    });

}
//////////////////////////////////////////////////
function pintarRespuestaFecha(respuesta){
    console.log(respuesta);
   let myTable="<table>";
   for(i=0;i<respuesta.length;i++){

       myTable+="<tr>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].client.name+" </td>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].status+" </td>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].startDate+" </td>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].devolutionDate+" </td>";
       myTable+="</tr>";
   }
   myTable+="</table>";
   $("#resultado3").append(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarRespuestaClientes(respuesta);
        }

    });

}
////////////////////////////////////////
function pintarRespuestaClientes(respuesta){
    console.log(respuesta);
   let myTable="<table>";
   for(i=0;i<respuesta.length;i++){

       myTable+="<tr>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].client.name+" es el nombre del cliente</td>";
       myTable+="<td class='border-separate border border-indigo-900'>"+respuesta[i].total+" total de reservaciones</td>";
       myTable+="</tr>";
   }
   myTable+="</table>";
   $("#resultado2").append(myTable);
}
