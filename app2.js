const express = require('express');
const app = express();

app.get('/',  (req, res ) => {
    res.send('inicioo ')
})

app.get('/hola',(req, res ) => {
    res.send('Hola como te va ')
})

app.get('*', (req, res ) => {
    res.send('404 || Ésta página no existe tontito ')
})
app.listen(9010);