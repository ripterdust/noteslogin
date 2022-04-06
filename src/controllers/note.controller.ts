import { Request, Response } from 'express';
class Note {
    index(req: Request, res: Response) {
        res.send('Hola');
    }
}

export const notes = new Note();
