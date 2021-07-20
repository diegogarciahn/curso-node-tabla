const argv = require('yargs')
                .options(
                    {
                        'b': {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla a multiplicar.'
                        },
                        'l':{
                            alias: 'list',
                            type: 'boolean',
                            default: false,
                            describe: 'Lista la tabla creada.'
                        },
                        'h':{
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'Número hasta donde desea multiplicar la tabla'
                        }
                    }
                ).check( ( argv, options ) =>{
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                    if( isNaN( argv.h ) ){
                        throw 'El el límite de la tabla debe ser un número'
                    }
                    return true;
                })
                .argv;



console.clear();
console.log( argv );

console.log('base: yargs', argv.base);

module.exports = argv;


// const argv = require('yargs')
//                 .option(
//                     'b', {
//                         alias: 'base',
//                         type: 'number',
//                         demandOption: true,
//                     })
//                 .option(
//                     'l',{
//                         alias: 'list',
//                         type: 'boolean',
//                         default: false,
//                         describe: 'Lista la tabla creada.'
//                     })
//                 .check( ( argv, options ) =>{
//                     if( isNaN( argv.b ) ){
//                         throw 'La base tiene que ser un número'
//                     }
//                     return true;
//                 })
//                 .argv;

