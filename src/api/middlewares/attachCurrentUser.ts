import { Container } from 'typedi';
import mysql from 'mysql';
import { IUser } from '../../interface/IUser';
// import { Logger } from 'winston';
import UserModel from '../../models/user'

const attachCurrentUser = async (req, res, next) => {
    // const Logger : Logger = Container.get('logger');
    try {

      const userRecord = await UserModel.findOne({
        where: {
            id: req.query.id
        }
      });
    //   if (!userRecord) {
    //     return res.sendStatus(401);
    //   }
      req.body.Specail = userRecord;
      return next();
    } catch (e) {
    //   Logger.error('🔥 Error attaching user to req: %o', e);
      return next(e);
    }
  };
  
  export default attachCurrentUser;