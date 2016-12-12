var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/build'));

if(process.env.NODE_ENV === 'production') {
  app.use('/path', function(req, res, next) {  
  if(!req.secure) {
    var secureUrl = "https://" + req.headers['host'] + req.url; 
    res.writeHead(301, { "Location":  secureUrl });
    res.end();
  }
  next();
});
}

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
