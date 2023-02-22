
import Sequelize from 'sequelize';
import db from '../loaders/postgressql';

const User = db().define('User', {
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    photo: Sequelize.STRING,
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    isActive: Sequelize.BOOLEAN,
    phoneNumber: Sequelize.STRING,
    createdAt:Sequelize.NUMBER,
    updatedAt: Sequelize.NUMBER

},
     {
          freezeTableName: true,
          timestamps: false
     }
);

const user =  User.build({ fullName: "sad",email:"sdgerg" });

user.save();

export default User;



















