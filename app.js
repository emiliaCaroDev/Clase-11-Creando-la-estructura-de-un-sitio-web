const express = require('express')

const app = express()

const path = require('path')

const pathPublic = path.resolve(__dirname,'public')

app.use( express.static( pathPublic ) )

app.listen( 3000, () => {
    console.log('Mercadoliebre esta corriendo!!!!!')
})

app.get('/', ( req , res ) => {
    // res.send('Hola')
    res.sendFile(__dirname + "/views/home.html")
})