'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   // In the Report model file
   static associate(models) {
    Report.belongsTo(models.User);
    models.User.hasMany(Report);

    Report.belongsTo(models.Student);
    models.Student.hasMany(Report);

  }

  }
  Report.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reference: DataTypes.STRING,
    description: DataTypes.STRING,
    departVerify: DataTypes.STRING,
    securityVerify: DataTypes.STRING,
    docVerify:DataTypes.STRING,
    evidenceVerify:DataTypes.STRING,
    CourtDocVerify: DataTypes.STRING,
    pliceDoc: DataTypes.STRING,
    courtDoc: DataTypes.STRING,
    status: DataTypes.STRING,
    paymentStatus: DataTypes.STRING,
    productionStatus: DataTypes.STRING,
    collectStatus: DataTypes.STRING,
    studentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};