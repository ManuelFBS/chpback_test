import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import testRoutes from './routes/test.routes';

dotenv.config();

const app: Application = express();

// Settings...
app.set('port', process.env.PORT || 8585 || 3000);

// Middlewares...
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes...
app.use('/api/test', testRoutes);

export default app;
