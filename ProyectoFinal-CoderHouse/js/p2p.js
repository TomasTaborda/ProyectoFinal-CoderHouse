'use strict'

let response = {}





// toma las 5 ultimas ordenes de compra en binance p2p para DAI,BTC,ETH , precio, moneda y nombre del anunciante
    
$("#btnConsultarDAI").click(()=>{
    $("#cajaDai").html("");


    fetch("https://criptoya.com/api/binancep2p/buy/dai/ars/5")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.data[0])
        $("#cajaDai").append(`<h1>Operaciones P2P Dai</h1>
        <p>
        <h3>${JSON.stringify(data.data[0].adv.price) } ${JSON.stringify(data.data[0].adv.fiatUnit) }${JSON.stringify(data.data[0].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[1].adv.price) } ${JSON.stringify(data.data[1].adv.fiatUnit) }${JSON.stringify(data.data[1].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[2].adv.price) } ${JSON.stringify(data.data[2].adv.fiatUnit) }${JSON.stringify(data.data[2].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[3].adv.price) } ${JSON.stringify(data.data[3].adv.fiatUnit) }${JSON.stringify(data.data[3].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[4].adv.price) } ${JSON.stringify(data.data[4].adv.fiatUnit) }${JSON.stringify(data.data[4].advertiser.nickName) } </h3>
        `)
        
        
    })
    
})

$("#btnConsultarBTC").click(()=>{
    $("#cajaBtc").html("");


    fetch("https://criptoya.com/api/binancep2p/buy/btc/ars/5")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.data[0])
        $("#cajaBtc").append(`<h1 >Operaciones P2P Bitcoin</h1>
        <p>
        <h3>${JSON.stringify(data.data[0].adv.price) } ${JSON.stringify(data.data[0].adv.fiatUnit) }${JSON.stringify(data.data[0].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[1].adv.price) } ${JSON.stringify(data.data[1].adv.fiatUnit) }${JSON.stringify(data.data[1].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[2].adv.price) } ${JSON.stringify(data.data[2].adv.fiatUnit) }${JSON.stringify(data.data[2].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[3].adv.price) } ${JSON.stringify(data.data[3].adv.fiatUnit) }${JSON.stringify(data.data[3].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[4].adv.price) } ${JSON.stringify(data.data[4].adv.fiatUnit) }${JSON.stringify(data.data[4].advertiser.nickName) } </h3>
        `)
        
        
    })
    
})

$("#btnConsultarETH").click(()=>{
    $("#cajaEth").html("");


    fetch("https://criptoya.com/api/binancep2p/buy/eth/ars/5")
    .then (data => data.json())
    .then (data=>{
        
        console.log(data.data[0])
        $("#cajaEth").append(`<h1>Operaciones P2P Ethereum</h1>
        <p>
        <h3>${JSON.stringify(data.data[0].adv.price) } ${JSON.stringify(data.data[0].adv.fiatUnit) }${JSON.stringify(data.data[0].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[1].adv.price) } ${JSON.stringify(data.data[1].adv.fiatUnit) }${JSON.stringify(data.data[1].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[2].adv.price) } ${JSON.stringify(data.data[2].adv.fiatUnit) }${JSON.stringify(data.data[2].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[3].adv.price) } ${JSON.stringify(data.data[3].adv.fiatUnit) }${JSON.stringify(data.data[3].advertiser.nickName) } </h3>
        <h3>${JSON.stringify(data.data[4].adv.price) } ${JSON.stringify(data.data[4].adv.fiatUnit) }${JSON.stringify(data.data[4].advertiser.nickName) } </h3>
        `)
        
        
    })
    
})

//botones para limpiar las cajas

$("#limpiarDai").click(()=>{
    $("#cajaDai").html("");
})
$("#limpiarBtc").click(()=>{
    $("#cajaBtc").html("");
})
$("#limpiarEth").click(()=>{
    $("#cajaEth").html("");
})