import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { User } from '../models/user';
import { UserList } from '../classes/user-list';

export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log("Cliente desconectado");
        disconnectClient(client);
    });

}


// Listen messages
export const message = (client: Socket, socket: socketIO.Server) => {
    client.on('message', (payload: {name: string, message: string}) => {
        console.log("Mensaje recibido", payload);

        socket.emit('message-new', payload);
    });
}

// Listen username
export const login = (client: Socket, socket: socketIO.Server) => {
    client.on('login-user', (payload: User, callback: Function) => {
        console.log('login-user');
        connectedUsers.updateName(client.id, payload.name);

        callback({
            ok: true,
            mensaje: `Usuario ${ payload.name }, configurado`
        });
    });
}

export const connectClient = (client: Socket) => {
    const user = new User(client.id);
    connectedUsers.add(user);
}

export const disconnectClient = (client: Socket) => {
    connectedUsers.delete(client.id);
}

export const connectedUsers = new UserList();
