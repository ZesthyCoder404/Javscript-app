const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.send('App working..')
})

app.listen(3000, () => {
    console.log('Listening')
})


//IMPORTANT
//pkg --target node14 app.js



