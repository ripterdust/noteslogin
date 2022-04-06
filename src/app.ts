import express from 'express';

// Initialization
export const app = express();

// Configuration
app.set('port', process.env.PORT || 3000);
