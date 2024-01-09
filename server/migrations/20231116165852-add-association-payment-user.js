'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Payments", {
      fields: ["userId"],
      type: "foreign key",
      name: "payment_user_association",
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
