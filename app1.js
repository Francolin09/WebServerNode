const http = require('http');

http.createServer((req, res) => { //request es la solicitud, response pos la respuesta
    // res.writeHead(200, {'Content-Type': 'text/plain'}) // aca le podemos pasar las cabeceras a nuestra peticion

    // const persona = {
    //     id:1,
    //     nombre:'Juan'
    // }
    // res.write('Wena oe') //lo que hace el.write es escribir en la pantalla
    // // res.write(persona) Esto da un error ya que el write solo acepta string y persona es un objeto

    // res.write(JSON.stringify(persona)) // si lo dejo asi el resultado sigue siendo texto plano pero ya lo muestra,
    // //  para que lo tome como json hay que cambiar el header
    // //y en vez de text/plain iria application/json
    // res.end() //Este metodo termina de ejecutar las acciones definidas, si no se pone queda esperando por siempre



    //ahora bien si quisiera por ejemplo mandar un archivo csv seria de la siguiente forma:
    // escribiré todo el codigo de nuevo y dejare comentado el de arriba, pero son dos cosas distintas

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    // res.write('id; nombre\n ');
    // res.write('1; Fernando\n');
    // res.write('2; Maria\n');
    // res.write('3; Juan\n');
    // res.write('4; Pedro\n');
    // res.end()
    //Con todo este codigo de arriba lo que hace al enviar una solicitud es descargar un archivo scv
    //y al abrirlo con excel está en formato tabla de atributos id y nombre


   
})


    .listen(9010);

console.log('Eeeeeescuchando')

//Aqui partiré con express asi que empezaré con todo el codigo de nuevo weno

