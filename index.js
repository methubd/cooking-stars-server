const express = require ('express')
const cors = require ('cors')
const app = express()
const port = 5000

const chefs = require ('./chefs.json')

app.use(cors())

app.get('/', (req, res)=> {
    res.send('Welcome - Cooking Stars Data Server')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.listen(port, () => {
    console.log('Food server is running on port', port);
})