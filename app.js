const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { argv } = require('./config/yargs.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${archivo}`.red))
            .catch(error => console.log(error.message));
        break;
    default:
        console.log('Comando no reconocido');
}