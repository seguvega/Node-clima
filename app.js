const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "Nombre de la ciudad",
        demand: true
    },
    opcion: {
        alias: 'o',
        desc: "Desppliega la Humedad (h) o la Presion Atmosferica(p)",
    }
}).argv

console.log("CIUDAD -> ", argv.ciudad);
const getInformacion = async(ciudad, opcion) => {
    try {
        const temp = await clima.getClima(ciudad, opcion)
        var opc = 0
        if (argv.opcion != undefined) {
            if (argv.opcion == 'p') {
                opc = "con una Presion Atmosferica "
            } else if (argv.opcion == 'h') {
                opc = "con una Humedad "
            } else {
                opc = `\nError No existe la opcion ${ opcion }, `
            }
            return `El clima de la ciudad ${ ciudad } es de ${ temp.tem }° centigrados ${ opc } ${ temp.opcion }`;
        }
        return `El clima de la cuidad ${ ciudad } es de ${ temp.tem }­° centrigrados­`;
    } catch (error) {
        return `No se pudo obtener el clima de ${ ciudad }`;
    }
}

getInformacion(argv.ciudad, argv.opcion)
    .then(console.log)
    .catch(console.log);