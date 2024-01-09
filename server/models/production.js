'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Production.belongsTo(models.User);
      models.User.hasMany(Production);

      Production.belongsTo(models.Report);
      models.Report.hasMany(Production);

      Production.belongsTo(models.Student);
      models.Student.hasMany(Production);


    }
  }
  Production.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId:DataTypes.INTEGER,
    reportId:DataTypes.INTEGER,
    productionStatus: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Production',
  });
  return Production;
};