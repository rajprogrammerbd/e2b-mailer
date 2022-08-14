require('dotenv').config();
import './src/utils/newrelic';
require('express-async-errors');
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import homepageRoutes from './src/routes/homepage.route';
import emailRoutes from './src/routes/email.route';

const app: express.Application = express();

app.use(cookieParser());
app.use(express.json());

const corsConfig = {
    credentials: true,
    origin: true,
  };
  app.use(cors(corsConfig));
  
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.use('/', homepageRoutes);
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5001;
export const appPort = app.listen(PORT, () => console.log(`Port currently running on ${PORT}`));
