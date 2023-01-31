const express = require('express')
const cors = require('cors')

const comickRouter = require('./routes/route.js')

const app = express()

app.use(cors())
app.use('/api/comick', comickRouter)

app.get('/', (req, res) => {
    res.send('API Running')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`))