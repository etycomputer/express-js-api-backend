import express from 'express';
// import morgan from 'morgan';
// import helmet from 'helmet';
// import cors from 'cors';
import { router as routes } from './routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny'));
// app.use(helmet());
// app.use(cors());

// Routes
app.use('/', routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
