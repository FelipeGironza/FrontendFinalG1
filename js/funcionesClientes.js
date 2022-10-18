//GET, POST , PUT Y DELETE

function getClientes(){
    $.ajax({
        url:"http://192.9.135.62:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postClientes(){
    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0){
        alert("Todos los campos son obligatorios para actualizar los datos");
    }else{
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://192.9.135.62:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el cliente");
            window.location.reload();
        }
    });
    }
}

function putClientes(idBotonActualizar2){
    
    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios para actualizar los datos");
   
}else{

        let cajas = {
            idClient:idBotonActualizar2,
            email:$("#email").val(),
            password:$("#password").val(),
            name:$("#name").val(),
            age:$("#age").val()

    };
 
    $.ajax({
        url:"http://192.9.135.62:8080/api/Client/update" ,
        type:"PUT",
        datatype:"JSON",
        contentType: "application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente el cliente");
                    window.location.reload();
                    
        }
    });
}

}
function deleteClientes(idBoton2){

    Swal.fire({
        title: 'Esta seguro de borrar el cliente?',
        text: "si estas seguro se borrara definitivamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Borralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'El Cliente ha sido borrada.',
            'Exitoso'
            
          )
          let myData={
            id:idBoton2
        };
        $.ajax({
            url:"http://192.9.135.62:8080/api/Client/"+idBoton2,
            type:"DELETE",
            datatype:"JSON",
            data:JSON.stringify(myData),
            contentType: "application/json",
            success:function(respuesta){
                //alert("se ha borrado correctamente la gama")
                window.location.reload();
            }
    
        });
        }
      })
    
}


////////////////////////////////////////
function pintarRespuesta(items){
    
    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap">';
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].email+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].password+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].name+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'>"+items[i].age+"</td>";
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='putClientes("+items[i].idClient+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>  Actualizar </button> " ;
        myTable+="<td class='border-separate border border-indigo-900'> <button onclick='deleteClientes("+items[i].idClient+")' class='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'> Borrar </button> " ;
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);

}