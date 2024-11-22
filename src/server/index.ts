import 'dotenv/config';

import compression from 'compression';
import cors from 'cors';

import express from 'express';
import passport from 'passport';

import initPassport from '../config/passport';
import routes from '../routes/users';
import sessionRoute from '../routes/session.route';
import { connect } from './database';

const environment = process.env.NODE_ENV || 'development';

console.log(`Running in ${environment} mode`);

const server = express();
server.use(compression());

initPassport(passport);
server.use(passport.initialize());

if (process.env.NODE_ENV !== 'test') {
  connect();
}

server.use(cors());
server.use(express.json());

server.use('/api/users', routes);
server.use('/api/sessions', sessionRoute);

server.use(
  (err: Error, _req: express.Request, res: express.Response) => {
    console.error(`[Error]: ${err.message}`);
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
    });
  },
);


export default server;
