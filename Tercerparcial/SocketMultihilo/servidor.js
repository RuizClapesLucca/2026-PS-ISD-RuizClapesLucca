const net = require('net'); 
const port = 5000;

const clientes = new Map();
let siguienteId = 1;

const servidor = net.createServer((socket) => {
    const id = siguienteId++;
    clientes.set(id, socket);
    console.log(`Cliente conectado con id #${id} (${clientes.size} conectados en total)`);
    socket.write(`Bienvenido al servidor, tu id es: ${id}\n`);
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log(`Cliente #${id} dice: ${mensaje}`);
        socket.write(`Eco del servidor: ${mensaje}\n`);
    });
    socket.on('close', () => {
        clientes.delete(id);
        console.log(`Cliente #${id} desconectado (${clientes.size} conectados en total)`);
    });
})
servidor.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
