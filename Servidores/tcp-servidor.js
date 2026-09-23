const net = require('net');
const PUERTO= process.env.PORT || 5000;
const servidor = net.createServer((socket)=> {
    const cliente=`${socket.remoteAddress}:${socket.remotePort}`;
    //Aqui el evento de conexion solo se dispara en el momento en el que el cliente y el servidor establecen un three away a traves del handshake TCP, es decir, cuando el cliente se conecta al servidor(el apreton de manos  es el momento en el que el cliente realiza una peticion, envia la ip, puerto,datagrama y saluda al servidor y el servidor le responde creando la sesion)}
    console.log(`[TCP] Conexion Establecida con El Cliente: ${cliente}`);
    socket.on('data',(datos)=>{
        const crudo= datos.toString();
        console.log(`[TCP] Datos Crudos asi crudisimos ${datos.length} bytes:${JSON.stringify(crudo)}`);
        const lineas=crudo.split('\n').map((l)=>l.trim()).filter((Boolean));
        lineas.forEach((linea)=>{
            console.log(`[TCP] Mensaje: "${linea}"`);
            socket.write(`Eco TCP: ${linea}\n`);
            });
        });
        socket.on('close',()=>{
            console.log(`[TCP] Conexion Cerrada con El Cliente: ${cliente}`);
        });
        socket.on('error',(err)=>{
            console.log(`[TCP] Error en la Conexion con : ${cliente}`, error.message);
        });
        });
        servidor.listen(PUERTO,()=>{
            console.log(`[TCP] Servidor TCP escuchando en el puerto ${PUERTO}`);
        });
    
