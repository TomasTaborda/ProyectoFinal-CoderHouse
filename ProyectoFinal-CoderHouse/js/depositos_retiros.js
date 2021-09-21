'use strict'

//funcion que me permite que el usuario no ingrese texto u otro caracter que no sea numerico

$(function(){

    $('#valorInput').keypress(function(e) {
      if(isNaN(this.value + String.fromCharCode(e.charCode))) 
       return false;
    })
    .on("cut copy paste",function(e){
      e.preventDefault();
    });
  
  });


// confirmacion de deposito , este se guarda en el local storage
$("#btnDepositar").click(()=>{
    let monto =document.getElementById("valorInput").value  ;
    let confirmacion = confirm("Esta seguro que desea realizar el deposito?")
    
    if (confirmacion==true && monto!="") {
        localStorage.setItem("montoLocal",monto);
        document.getElementById("valorInput").value = "";
        document.getElementById("montoLocal").innerHTML = "Deposito realizado por $"+monto
        $("#montoLocal").fadeOut(2000);
    } else{
        alert("Deposito cancelado!")
    }
    
    
    
})

// ver deposito guardado en local storage

$("#btnVer").click(()=>{
    
    let montoDepositado =localStorage.getItem("montoLocal")
    $("#montoLocal").fadeIn(1000).fadeOut(1000);
    document.getElementById("montoLocal").innerHTML = "Solicitud de deposito por: $"+montoDepositado
    if (montoDepositado==null || montoDepositado=="") {
        document.getElementById("montoLocal").innerHTML = "No hay solicitudes de deposito"
        
    }
    
    
})

// elimina la solicitud de deposito generada

$("#btnEliminar").click(()=>{
    $("#montoLocal").fadeIn(1000)
    document.getElementById("montoLocal").innerHTML = "Solicitud de deposito eliminada";
    localStorage.clear();
})







