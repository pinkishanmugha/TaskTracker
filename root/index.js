import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRouter from './routes/auth.js';
import projectRouter from './routes/project.js';
import connectToDatabase from './db/db.js';

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase();

app.use('/api/auth', authRouter);
app.use('/api/project', projectRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
