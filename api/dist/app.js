import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express();
//middlwares
app.use(express.json());
app.use('/api/v1', appRouter);
//remove in production
app.use(morgan("dev"));
export default app;
//# sourceMappingURL=app.js.map