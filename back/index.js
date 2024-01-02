const express = require('express');

const db = require('./db/db')
const userRoutes = require('./routes/userRoutes');
const shipRoutes = require('./routes/shipRoutes');
const cors = require('cors')
require ('./middlewares/auth')

const app = express();

db()

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}));
app.use(express.json())
app.use('/', userRoutes)
app.use('/ships', shipRoutes)
app.listen(8080, () => console.log("Connecté sur le port 8080"));