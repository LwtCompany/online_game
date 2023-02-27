
import Sequelize from 'sequelize';
import db from '../loaders/mysql';

const User =  db().define('User', {
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    photo: Sequelize.STRING,
//     login: Sequelize.STRING,
//     password: Sequelize.STRING,
//     isActive: Sequelize.BOOLEAN,
//     phoneNumber: Sequelize.STRING,
//     createdAt:Sequelize.NUMBER,
//     updatedAt: Sequelize.NUMBER

},
     {
          freezeTableName: true,
          timestamps: false
     }
);

export default User;



















