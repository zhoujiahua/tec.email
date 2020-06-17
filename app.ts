import express, { NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'dotenv/config';
import path from 'path';
const app: express.Application = express();

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res, _next) => {
    res.json({ success: true, data: 'Hi TE Cloud VM...' });
});

import common from './api/index';
app.use('/api/email', common);

(async function () {
    await mongoose.set('useNewUrlParser', true)
    await mongoose.set('useUnifiedTopology', true)
    const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/tsbackend'
    await mongoose.connect(MONGODB_URL)
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    })
})()