import * as express from 'express';
import { APP_CONTEXT_TYPE } from './enums';
import { healthCheck } from './app.service';

const AppRouter = express.Router();

AppRouter.get(APP_CONTEXT_TYPE.ROOT, healthCheck);


export default AppRouter;