const express = require('express')
const app = express()
const cors = require('cors')

//app.use(cors({origin: 'http://127.0.0.1:5501'}))
app.use(cors({origin: '*'}))

app.get('/data', (req, res) => {
    res.json({name: "Kyle",favoriteFood: "Rice"})
})

app.listen(3000)
