const express = require('express')
const fs = require('fs')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let orders = []


app.post('/', (req, res) => {
    orders.push(req.body)
    fs.writeFileSync("DataBase.json", JSON.stringify(orders))
    
    console.log("Post", req.url,req.body)
    
    res.send(req.body)
    
})


app.get('/admin', (req, res) => {
    console.log()
    res.send(orders)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

