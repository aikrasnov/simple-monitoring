const express = require('express');
const {getStatus} = require('./helper');
const app = express();

const returnJson = (res, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
};

app.get('/getStatus', (req, res) => {
    getStatus().then(data => {
        returnJson(res, data);
    }).catch(err => {
        console.log(err);
        returnJson(res, err);
    });
});

app.use(express.static('public/'));

app.listen(8080, () => {
    console.log('run on 8080');
});
