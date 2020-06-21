import Server from './src/classes/server';
import { SERVER_PORT } from './global/enviroment';
import router from './src/routes/routing';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json())

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Routing
server.app.use('/', router);

// Start server
server.start(() => {
    console.log(`Servidor ejecutandose en el puerto ${SERVER_PORT}`);
});

