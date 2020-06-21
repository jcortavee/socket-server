import express from 'express';
import { SERVER_PORT } from '../../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';

export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public socket: SocketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.socket = socketIO(this.httpServer);

        this.listenSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this);
    }

    start(callback: () => void) {
        this.httpServer.listen(this.port, callback);
    }

    private listenSockets() {

        console.log("Listening sockets");

        this.socket.on('connection', client => {
            console.log("Client connected!");
        
            // Messages
            socket.message(client, this.socket);

            // Disconnect
            socket.disconnect(client);
        });
    

    }

}