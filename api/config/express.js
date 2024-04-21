const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('../routes/users');
const bookRoutes = require('../routes/books');
const saleRoutes = require('../routes/sales');



const app = express();


app.use(cookieParser())
app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true,
}));


app.use('/users', userRoutes)
app.use('/books', bookRoutes)
app.use('/sales', saleRoutes)

app.use('/uploads', express.static('uploads'));


module.exports = app;