const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Route.belongsTo(User, {
        foreignKey: {
          name: 'userID',
        },
      });
    }
  }
  Route.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coordinates_1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coordinates_2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};
