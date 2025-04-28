const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    citas.push({ nombre, edad, animal, color, enfermedad });
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita registrada con éxito.');
};

// Función para leer todas las citas
const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log('Citas registradas:');
    citas.forEach(cita => console.log(cita));
};

// Exportar las funciones
module.exports = { registrar, leer };