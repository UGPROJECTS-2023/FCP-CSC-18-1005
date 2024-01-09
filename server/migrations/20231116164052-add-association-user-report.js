'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Reports", {
      fields: ["userId"],
      type: "foreign key",
      name: "user_reports_association",
      references: {
        table: "Users",
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
