'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Departments", {
      fields: ["facultyId"],
      type: "foreign key",
      name: "faculty_department_association",
      references: {
        table: "Faculties",
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
