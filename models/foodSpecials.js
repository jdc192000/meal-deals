module.exports = function (sequelize, DataTypes) {
    var FoodSpecials = sequelize.define("FoodSpecials", {
        place_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        special: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 160]
            }
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        details: {
            type: DataTypes.STRING(1000),
        },
        timeofday: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
            // value 1 = all day
            // value 2 = breakfast
            // value 3 = lunch
            // value 4 = dinner
        },
        daily: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        sunday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        monday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        tuesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        wednesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        thursday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        friday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        saturday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    FoodSpecials.associate = function (models) {
        FoodSpecials.belongsTo(models.LocationId, {
            foreignKey: {
                onDelete: "cascade",
                allowNull: false
            }
        });
    };

    return FoodSpecials;
};
