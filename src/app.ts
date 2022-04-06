import express from 'express';
import { authRouter } from './router/auth.router';
import { noteRouter } from './router/note.router';
import { join } from 'path';
import { create } from 'express-handlebars';

// Initialization
export const app = express();
const hbs = create({
    partialsDir: ['/partials/notes', '/partials/auth'],
});
// Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
// routes
app
    // Notes
    .use('/', noteRouter)
    // Auth
    .use('/auth', authRouter);
