'use strict'



//realizo push de las criptos a comprar
const Criptomonedas=[]

Criptomonedas.push(new CriptoMoneda(0,"USDT",1,"img/usdt.png"))
Criptomonedas.push(new CriptoMoneda(1,"BTC",45000,"img/btc2.png"))
Criptomonedas.push(new CriptoMoneda(2,"BNB",355,"img/bnb.png"))
Criptomonedas.push(new CriptoMoneda(3,"LTC",180.35,"img/ltc.png"))
Criptomonedas.push(new CriptoMoneda(4,"EOS",4.15,"img/eos.png"))
Criptomonedas.push(new CriptoMoneda(5,"ETH",3200,"img/eth.png"))




// llamo a las funciones para generar el html 

criptosUI(Criptomonedas)




//cuando se hace click en comprar se obtiene el id
const botones = document.getElementsByClassName("btn btn-primary btn-compra")




for (const boton of botones) {
    boton.addEventListener("click", comprarManejador)
    
}






//obtengo en tiempo real las diferentes cotizaciones de dolar en argentina
fetch("https://criptoya.com/api/dolar")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.mep)
        $("#mep").append(`${JSON.stringify(data.mep) }`)
})

fetch("https://criptoya.com/api/dolar")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.ccl)
        $("#ccl").append(`${JSON.stringify(data.ccl) }`)
})

fetch("https://criptoya.com/api/dolar")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.ccb)
        $("#ccb").append(`${JSON.stringify(data.ccb) }`)
})


fetch("https://criptoya.com/api/dolar")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.blue)
        $("#blu").append(`${JSON.stringify(data.blue) }`)
})

fetch("https://criptoya.com/api/bitstamp/btc")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.last)
        $("#bsu").append(`${JSON.stringify(data.last) }`)
})

fetch("https://criptoya.com/api/bitstamp/eth")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.last)
        $("#bth").append(`${JSON.stringify(data.last) }`)
})

fetch("https://criptoya.com/api/bitstamp/eth")
    .then (data => data.json())
    .then (data=>{
        
        let variacion1 = data.last
        let variacion2 = data.open
        let variacionfinal = ((variacion1-variacion2)/variacion2)*100
        console.log(variacionfinal)
       $("#btv").append(variacionfinal.toFixed(2))
})

fetch("https://criptoya.com/api/bitstamp/btc")
    .then (data => data.json())
    .then (data=>{
        
        let variacion1 = data.last
        let variacion2 = data.open
        let variacionfinal = ((variacion1-variacion2)/variacion2)*100
        console.log(variacionfinal)
       $("#bsv").append(variacionfinal.toFixed(2))
})

fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle")
    .then (data => data.json())
    .then (data=>{
        
        
        console.log(data.ProposeGasPrice)
       $("#txe").append(`${JSON.stringify(data.ProposeGasPrice) }`)
})


let KLASSLÑERLKGLKBLKTÑIJKM    

if (KLASSLÑERLKGLKBLKTÑIJKM    == "KLASSLÑERLKGLKBLKTÑIJKM") {
    alert("Hola")
}