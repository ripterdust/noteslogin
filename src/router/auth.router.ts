import { Router } from 'express';
import { user } from '../controllers/user.controller';

export const authRouter = Router();

authRouter.get('/').get('/register', user.index);
