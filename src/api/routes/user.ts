import { Router, Request, Response } from 'express';
const route = Router();
import middlewares from '../middlewares';
export default (app: Router) => {
    app.use('/users', route);
  
    route.post('/me', middlewares.attachCurrentUser, (req: Request, res: Response) => {
      return res.send(req.body).status(200);
    });
};