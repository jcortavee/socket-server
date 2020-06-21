import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log("Cliente desconectado");
    });

}


// Listen messages
export const message = (client: Socket, socket: socketIO.Server) => {
    client.on('message', (payload: {name: string, message: string}) => {
        console.log("Mensaje recibido", payload);

        socket.emit('message-new', payload);
    });
}