const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
    {
        //table data
        //id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //user column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        email: {
            //email column
            type: DataTypes.STRING,
            allowNull: false,
            //so there are no duplicate emails
            unique: true,
            //when allownNull is set to false you can run the data thru validators b4 table is created
            validate: {
                isEmail: true
            }
        },
        password: {
            //password column
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //minimum length of password
                len: [4]
            }
        }
    },
    {
        //tables config goes heres
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;