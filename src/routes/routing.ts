import { Router, Request, Response } from "express";

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

    res.json({
        ok: true,
        message: message,
        user: user,
        id: id
    });
});

export default router;