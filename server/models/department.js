'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.belongsTo(models.Faculty);
      models.Faculty.hasMany(Department);
     
    }
  }
  Department.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    facultyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};