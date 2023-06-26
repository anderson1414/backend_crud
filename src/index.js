
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

const userRoutes = require('./routes/user');



// midelwars
app.use(express.json());
app.use('/api', userRoutes)


//rutes

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi Proyecto')
});

//mongobd connection

mongoose.connect("mongodb://127.0.0.1:27017/proyecto")
.then(() => console.log ('Conecado a la Base de Datos de MongoDB Atlas'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('El servidor esta activo en la puerto', port));