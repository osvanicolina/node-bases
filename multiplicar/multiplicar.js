//Requireds
const fs = require('fs');
const colors = require('colors');
// const fs = require('express'); paquetes no nativos de node
// const fs = require('./fs');  archivos que nosotros referenciamos manualmente 

let listarTabla = (base, limite) => {
    console.log('=================='.red);
    console.log(`=========tabla de ${base}=========`.red);
    console.log('=================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


let crearArchivo = async(base, limite) => {

    if (!Number(base) || !Number(limite)) {
        throw new Error(`El valor introducido ${base} o ${limite} no es un número.`);
    } else {
        let nombreArchivo = `tabla-${base}.txt`;
        let dataContent = '';
        for (let i = 1; i <= limite; i++) {
            dataContent += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(dataContent));
        fs.writeFile('./tablas/' + nombreArchivo, data, (err) => {
            if (err) throw err;
        });
        return nombreArchivo;
    }
};


module.exports = {
    crearArchivo,
    listarTabla
}