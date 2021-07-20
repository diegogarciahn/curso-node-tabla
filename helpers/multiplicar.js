const fs = require('fs');
const colors = require('colors');

// const crearArchivo = ( base = 5 ) => {

//     console.log("===========================");
//     console.log(`    Tabla del ${ base }     `);
//     console.log("===========================");

//     let salida = '';

//     for (let i = 0; i < 10; i++) {
//         salida += `${ base } X ${ i+1 } = ${ base * (i+1) }\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync( `tabla-${ base }.txt`, salida );

//     console.log(`tabla-${ base }.txt creado`);

// }

const crearArchivo = async( base = 5, hasta = 10, listar = false ) => {

    try {

        let salida = ''; 
        let consola = '';


        for (let i = 0; i < hasta; i++) {
            salida += `${ base } 'X' ${ i+1 } '=' ${ base * (i+1) }\n`;
            consola += `${ base } ${'X'.blue} ${ i+1 } ${'='.red} ${ base * (i+1) }\n`;
        }

        if (listar) {
            console.log("===========================".green);
            console.log(colors.blue(`       Tabla del`), colors.yellow(` ${ base }     `));
            console.log("===========================".green);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;
        
    } catch (error) {

        throw error;
        
    }
    

}

module.exports = {
    crearArchivo
}

