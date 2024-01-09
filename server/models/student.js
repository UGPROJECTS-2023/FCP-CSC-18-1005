'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // In the Student model file

static associate(models) {
  Student.belongsTo(models.Faculty);
  models.Faculty.hasMany(Student);

  Student.belongsTo(models.Department);
  models.Department.hasMany(Student);
}

  }
  Student.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    blood: DataTypes.STRING,
    email: DataTypes.STRING,
    level: DataTypes.STRING,
    departmentId:DataTypes.INTEGER,
    regNo: DataTypes.STRING,
    facultyId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    nextKin: DataTypes.STRING,
    dp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};