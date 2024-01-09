'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reference: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      departVerify: {
        type: Sequelize.STRING
      },
      securityVerify: {
        type: Sequelize.STRING
      },
      docVerify: {
        type: Sequelize.STRING
      },
      evidenceVerify: {
        type: Sequelize.STRING
      },
      CourtDocVerify: {
        type: Sequelize.STRING
      },
      pliceDoc: {
        type: Sequelize.STRING
      },
      courtDoc: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      paymentStatus: {
        type: Sequelize.STRING
      },
      productionStatus: {
        type: Sequelize.STRING
      },
      collectStatus: {
        type: Sequelize.STRING
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Reports');
  }
};