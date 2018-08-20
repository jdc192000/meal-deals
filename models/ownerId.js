module.exports = function (sequelize, DataTypes) {

    var OwnerId = sequelize.define("OwnerId", {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        userid: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [3,16],
                isAlphanumeric: true
            },
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.INTEGER
        },

        createdAt: {type: DataTypes.DATE},

        updatedAt: {type: DataTypes.DATE}

    });

    return OwnerId;
};
