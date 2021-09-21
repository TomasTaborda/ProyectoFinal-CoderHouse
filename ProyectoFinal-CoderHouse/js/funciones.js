
// me permite comprar , calcula las comisiones y me genera las alertas


function comprarManejador() {
    
    let indice = this.id
    let compraConfirmada = 0
    

    
    
    function compraFinal() {
        return Criptomonedas[indice].valor*comision
    }

        
    
        alertify.prompt("Ingrese el monto que desea comprar","",
            
            function(evt, value ){
                
                let compraDeposito = localStorage.getItem("montoLocal")
                let compraresta = 0
                let compraUltima =parseFloat(value) 
                compraConfirmada = compraUltima / compraFinal()
                let comisionFinal = compraUltima * 0.015
                
                if (compraDeposito>=value) {
                    
                    compraresta = compraDeposito-value
                    let saldo = localStorage.setItem("montoLocal",compraresta)
                    alertify.success("Compra exitosa!" + "\n" + "Has comprado: " + compraConfirmada.toFixed(3) + Criptomonedas[indice].name+ "Se ha cobrado una comision de: $" + comisionFinal);   
                

                } else {
                    
                    alertify.error("Saldo insuficiente, por favor haga un deposito!");
                }
                
                
            
            
                })
        
    
       
    

}


// con estas dos funciones genero el html correspondiente para cada cripto, primero genero la estructura y luego con un for recorro el array imprimiendo cada elemento en el html.
function criptosHTML(criptos) {
    
    return `<div class="card" style="width: 18rem;">
                            
                            <div class="card-body">
                            <img id="imagencriptos" src="${criptos.imagen}" class="card-img-top" alt="...">
                            <p>
                            <h5 id=nombrecripto class="card-title">${criptos.name}</h5>
                            <p id="valorcripto" class="card-text">$${criptos.valor}</p>
                            
                            <hr>
                            <button type="button" class="btn btn-primary btn-compra" id="${criptos.id}">Comprar</a>
                            
                            </div>
                            </div>`;
    
        
    
                            
}
//se agregan los elementos en el html
function criptosUI(Criptomonedas){
    const divCriptoUI = document.getElementById("Criptos2")
    divCriptoUI.innerHTML="";
    for (const criptos of Criptomonedas) {  
        let div = document.createElement("div");
        div.innerHTML = criptosHTML(criptos)
        divCriptoUI.appendChild(div)
        
    }
    
    
   
}

