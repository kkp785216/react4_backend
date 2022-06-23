const express = require('express')
const app = express()
const port = 3000
const getCities = require('./Firebase/GetData.js')
const db = require('./Firebase/QuickStart.js')

app.get('/api/posts', (req, res) => {
    getCities(db, "Posts")
        .then((data) => {
            res.send(data);
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})