import { Router, Request, Response } from "express";
import Server from '../classes/server';
import { message } from '../sockets/socket';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: "OK"
    });
});

router.post('/messages', (req: Request, res: Response) => {

    const message = req.body.message;
    const user = req.body.user;
    const payload = {name: user, body: message};

    const server = Server.instance;
    server.socket.emit('message-new', payload);

    res.json({
        ok: true,
        message: message,
        user: user
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const message = req.body.message;
    const user = req.body.user;
    const id = req.params.id;

    const server = Server.instance;
    server.socket.in(id).emit('private-message', {from: user, message: message});

    res.json({
        ok: true,
        message: message,
        user: user,
        id: id
    });
});

export default router;