let express = require('express'),
    bp = require('body-parser'),
    root = __dirname,
    port = process.env.PORT || 8000,
    app = express();

app.use(express.static(root + '/static'));
app.use(express.static(root + '/node_modules'));
app.use(bp.json());

app.set('views', root + '/client')
app.set('view engine',  'ejs')
app.get('/', function(req, res){
    res.render('index')
})

// require('./server/config/mongoose');
// require('.server/config/routes.js');
// require('./server/config/routes.js')(app);

// mogoose.Promise = global.Promise;

app.listen(port, function() {
    console.log('Running on port 8000...');
});
