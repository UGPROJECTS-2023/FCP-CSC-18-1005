'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Productions", {
      fields: ["studentId"],
      type: "foreign key",
      name: "productions_students_association",
      references: {
        table: "Students",
        field: "id",
      },
    });
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
