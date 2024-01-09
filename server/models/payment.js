'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     

      Payment.belongsTo(models.Report);
      models.Report.hasMany(Payment);
    
      Payment.belongsTo(models.Student);
      models.Student.hasMany(Payment);
    
      Payment.belongsTo(models.User);
      models.User.hasMany(Payment);
    }
  }
  Payment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reportId:DataTypes.INTEGER,
    status: DataTypes.STRING,
    studentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};