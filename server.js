var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//app.get('/', function(req,res) {
//    res.sendFile(__dirname + '/public/index.html');
//});

var myState = "";

app.get('/', function (req, res) {
    if(req.query.q){
        myState = req.query.q;
        console.log("submit", myState);
    }
    res.send(myState);

})
/*
app.get(/^(.+)$/, function(req, res) { //file server for the rest of the files in /public
                                       //see comments at http://stackoverflow.com/questions/9443840/basic-webserver-with-node-js-and-express-for-serving-html-file-and-assets
    try{
        res.sendFile(__dirname +  '/public/' + req.params[0]);
    }catch(err){
        console.log("file err ", err);
    }

});*/



var server = app.listen(3002, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('server listening at http://%s:%s', host, port)

})