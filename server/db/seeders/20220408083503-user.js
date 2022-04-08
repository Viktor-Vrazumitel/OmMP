"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          login: "Petr",
          email: "1@mail.ru",
          password: 123,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          login: "ivan",
          email: "2@mail.ru",
          password: 123,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
