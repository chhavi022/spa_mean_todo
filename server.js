var express = require('express');
var app = express();
var router = require('./api');

const PORT = 3009;

app.use('/api', router);

app.listen(PORT , () => {
    console.log(`Server listening on port : ${PORT}`);
})