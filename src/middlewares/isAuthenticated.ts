import { Request, Response } from 'express';

class Auth {
    index(req: Request, res: Response) {
        res.send('hola');
    }
}
