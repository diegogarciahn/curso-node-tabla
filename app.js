
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo( argv.base, argv.h, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));

// const [,,arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');

//console.log(arg3);


// const base = 10;




