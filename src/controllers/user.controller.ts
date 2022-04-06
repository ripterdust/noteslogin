import { Request, Response } from 'express';

class User {
    index(req: Request, res: Response) {
        res.send('usuario');
    }
    create(req: Request, res: Response) {
        res.send('Registrarse');
    }
    store(req: Request, res: Response) {
        res.send('Registrado');
    }
}

export const user = new User();
