const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================================='.red);
    console.log(`Tabla de ${base}`.green);
    console.log('===================================='.red);
    for (let i = 0; i < limite; i++) {
        console.log(`${base} * ${i} = ${i*2}`);   
    }
}


let crearArchivo = (base, limite) => {

    return new Promise ((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor de base:${base} no es un núnero`);
            return;
        }

        let data = ''

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${i*2}\n`;
        }
        
        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
          if (err) reject(err);
            
          resolve(`tabla-del-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}