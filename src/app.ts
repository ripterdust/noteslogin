import express from 'express';
import { authRouter } from './router/auth.router';
import { noteRouter } from './router/note.router';
import { join } from 'path';

// Initialization
export const app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

// routes
app
    // Notes
    .use('/', noteRouter)
    // Auth
    .use('/auth', authRouter);
