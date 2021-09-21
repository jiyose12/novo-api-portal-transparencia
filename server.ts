import express from "express";
import "./api/database";
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 1338)

app.listen(app.get('port'), () => {
    console.log('O servidor está escutando na porta ' + app.get('port') + '.')
   
})