module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
            timestamps: false
        });
    return burger;
};

// I'm not sure what's going on with my repo...