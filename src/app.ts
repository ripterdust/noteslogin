import express from 'express';
import { authRouter } from './router/auth.router';
import { noteRouter } from './router/note.router';

// Initialization
export const app = express();

// Configuration
app.set('port', process.env.PORT || 3000);

// routes
app
    // Notes
    .use('/', noteRouter)
    // Auth
    .use('/auth', authRouter);
