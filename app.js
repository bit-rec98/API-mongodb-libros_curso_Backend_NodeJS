const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const librosRouter = require('./routes/libros');

const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`);
}); 


