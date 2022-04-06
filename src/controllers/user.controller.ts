import { Request, Response } from 'express';

class User {
    index(req: Request, res: Response) {
        res.send('usuario');
    }
}

export const user = new User();
