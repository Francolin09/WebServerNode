//En esta webserver4 veremos como usar partials para poder reutilizar nuestras cosas 
const express = require('express');
const app = express();

const hbs = require('hbs')
require('dotenv').config()

const port = process.env.PORT;

//Para utilizar hbs y pedirle que renderice nuestras vistas usaremos lo siguiente:

app.set('view engine', 'hbs')

//Para usar partials se hace lo siguiente:

hbs.registerPartials(__dirname + '/views/partials', function (err) { })//Acá indicamos que nuestros partials estaran en la ruta vistas,
//y luego de crearlas dentro de la carpeta partials solo los llamamos con {{ > nombredelpartial}} en el hbs principal


app.use(express.static('public'))

//Ahora para hacer uso del template en hbs lo usaremos de esta forma

// app.get('/',  (req, res ) => {
//     res.render('home') //home porque es el nombre del archivo
// })

//Ahora haremos la misma renderización pero mandando argumentos desde el controlador, que es la funcion que haremos
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Francolin',
        titulo: 'Curso de node'
    }) //Una de las cosas que podemos hacer es atrapar estos argumento en el html y mostrarlos, anda a ver al hbs y vuelves

})



//Poniendo esta ruta asi aseguramos que cuando se escriba /generic vaya al archivo de generic correspondiente 
//y además no se mostrara la extension del archivo que eso se ve feo muy feo

//Pero ahora además usaremos ya las vistas creadas con hbs asi que quedarán como la de arriba.

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Francolin',
        titulo: 'Curso de node'
    }) //Una de las cosas que podemos hacer es atrapar estos argumento en el html y mostrarlos, anda a ver al hbs y vuelves

})

//Esto lo hacemos para asignar rutas y para que se vea mejor, de no hacerlo, igual funciona
//pero las rutas van a ser los nombres de los archivos
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Francolin',
        titulo: 'Curso de node'
    }) //Una de las cosas que podemos hacer es atrapar estos argumento en el html y mostrarlos, anda a ver al hbs y vuelves

})



app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => { console.log('corriendo eeeeeen el puertoo ', port)});