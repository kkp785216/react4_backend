const express = require('express')
const app = express()
const port = 5000
const getCities = require('./Firebase/GetPosts.js')
const dbc = require('./Firebase/QuickStartCreate.js')
const dbr = require('./Firebase/QuickStartRead.js')
const setComments = require('./Firebase/SetComments.js')
const cors = require('cors')

app.use(cors())

app.get('/api/posts', (req, res) => {
    getCities(dbr)
        .then((data) => {
            res.send({
                success: true,
                data: data
            });
        }).catch((err) => {
            res.send({
                success: false,
                err: err
            });;
        });
});

app.post('/api/comments', (req, res) => {
    console.log(req.query)
    setComments(dbc, req.query).then((data) => {
        res.send({
            success: true,
            msg: "your response has been saved",
            _id: data
        });
    }).catch((err) => {
        res.send({
            success: false,
            err: err
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});