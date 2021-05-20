const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
let id = 1

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.get('/', (req, res) => {
    
   
})
app.post('/play',  (req, res) => {
    fs.readFile('./data.json', 'utf-8', (error, data) => {
        if (error) {
            res.end("No data found")
            return
        }
        const object = JSON.parse(data);
        object.users.push({
            "id": id,
            "name": req.body.name 
        })
        id++
        
        fs.writeFile('./data.json', JSON.stringify(object, null, 2), (error) => {
            if (error) {
                res.end(error.message)
                return
            }
        })
    })

    
    res.sendFile(path.join(__dirname, 'public/play.html'))
})

app.listen(5500)