import { Router } from 'express';
import { user } from '../controllers/user.controller';

export const authRouter = Router();

authRouter
    .get('/', user.index)
    .get('/register', user.create)
    .post('/register', user.store);
