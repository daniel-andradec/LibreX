const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/index'); 
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const saleRoutes = require('./routes/sales');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use('/users', userRoutes)
app.use('/books', bookRoutes)
app.use('/sales', saleRoutes)
app.use('/uploads', express.static('uploads'));


app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

