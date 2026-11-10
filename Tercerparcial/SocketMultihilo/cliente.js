const net = require('net');
const port = 5000;
const nombre = process.argv[2] || 'Cliente';

const socket = net.connect(port, 'localhost', () => {
    console.log(`${nombre} conectado al servidor`);
    socket.write(`Hola desde ${nombre}\n`);
});
socket.on('data', (data) => {
    const mensaje = data.toString().trim();
    console.log(`Servidor dice: ${mensaje}`);
});
socket.on('error', (error) => {
    console.error(`No se pudo conectar al servidor: ${error.message}`);
});
socket.on('close', () => {
    console.log(`${nombre} desconectado`);
});