const express = require('express')
const app = express()
const port = 5000
const getCities = require('./Firebase/GetPosts.js')
const dbc = require('./Firebase/QuickStartCreate.js')
const dbr = require('./Firebase/QuickStartRead.js')
const setComments = require('./Firebase/SetComments.js')
const cors = require('cors')
const getComments = require('./Firebase/GetComments.js')
const SetPosts = require('./Firebase/SetPosts.js')
const posts = require('./Firebase/posts.js')

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

app.get('/api/comments', (req, res) => {
    getComments(dbr, req.query.url)
        .then((data) => {
            res.send({
                success: true,
                data: data.sort((a,b)=>{b.date -  a.date})
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

// app.get('/api/setpost', (req, res) => {
//     function fruitIterator(values) {
//         let nextIndex = 0;
//         // We will return an object
//         return {
//             next: function () {
//                 if (nextIndex < values.length) {
//                     // We will return this object
//                     return {
//                         value: values[nextIndex++],
//                         done: false
//                     }
//                 }
//                 else {
//                     return {
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
//     const fruits = fruitIterator(posts);
//     // res.send(fruits.next().value)

//     let index = 1
//     let hello = setInterval(() => {
//         SetPosts(dbc, fruits.next().value).then((data) => {
//             // res.send({
//             //     success: true,
//             //     msg: "your response has been saved",
//             //     _id: data
//             // });
//         }).catch((err) => {
//             // res.send({
//             //     success: false,
//             //     err: err
//             // });
//         });
//     }, 1000);
//     if(index === 45) {
//         res.send('completed')
//         clearInterval(hello)
//     }
//     index++
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});