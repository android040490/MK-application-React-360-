const express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));
app.use('/static_assets', express.static(__dirname + '/static_assets'));

app.listen(PORT, function(){
    console.log('Express server is up on port' + PORT);
});