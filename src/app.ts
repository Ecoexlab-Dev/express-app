import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import appRouter from './app.router';

import { APP_CONTEXT_TYPE } from '@enums';

const PORT = process.env.PORT;
const ENV = process.env.ENV;

const app = express();
const port = PORT ? PORT : 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(APP_CONTEXT_TYPE.BASE_URL, appRouter);

app.listen(port, () => {
    console.log(`✅ App is listening to port ${port} with ${ENV} environment.`);
});