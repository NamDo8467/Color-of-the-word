const express = require('express')
const fs  = require('fs')
const app = express()

app.use((req, res, next) => {
    console.log("Verifing request"); 
    next();
})
   
app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(5500)