import { Router } from 'express';
import { notes } from '../controllers/note.controller';

export const noteRouter = Router();

noteRouter.get('/', notes.index);
