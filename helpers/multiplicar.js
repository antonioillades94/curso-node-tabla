const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta = 10) => {

    try{

        let salida = '';
        let consola = '';
        
            for( let i=1; i<=hasta; i++ ){
                console.log( base, i, ' = ', base * i, '\n');
                salida += (`${ base } x ${ i } = ${ base * i }\n`);
                consola += (`${ base } ${colors.red('x')} ${ i } = ${ base * i }\n`);
            }
        if ( listar ){
            console.log("=======================");
            console.log("     Tabla del:".blue, colors.green(base) );
            console.log("=======================");
            console.log( consola );
        }
        // Primera forma de escribir en fichero
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) =>{
        //     if ( err )throw err;
        //     console.log(`tabla-${ base }.txt creado`);
        // });


        // Segunda forma de escribir en fichero ESTA ES MEJOR!!
        // try{
        //     fs.writeFileSync( `tabla-${ base }.txt`, salida );
        //     console.log(`tabla-${ base }.txt creado`);
        // }catch(error){
        //     console.log(error);
        // }     

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        return (`tabla-${ base }.txt creado`);

    }catch( error ){
        throw error;
    }
    


      

}

module.exports = {
    // Se puede poner de las dos formas pero no es necesario poner function
    //function : crearArchivo
    crearArchivo
}