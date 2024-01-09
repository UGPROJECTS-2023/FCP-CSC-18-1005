'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      blood: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      departmentId: {
        type: Sequelize.INTEGER
      },
      regNo: {
        type: Sequelize.STRING
      },
      facultyId: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      nextKin: {
        type: Sequelize.STRING
      },
     dp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};