var express=require('express');
var cors=require('cors');
var app=express();
var path = require('path');

const mysql=require('./database');
//setear puerto
const port = process.env.PORT || 8989;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

//mildewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/vendedor',require('./routes/vendedor.route'));
app.use('/api/login',require('./routes/login.route'));
app.use('/api/book',require('./routes/libro.route'));
app.use('/api/venta',require('./routes/venta.route'));

app.listen(port, () => {
    console.log(`Escuchando puerto: ${port}`);
});

