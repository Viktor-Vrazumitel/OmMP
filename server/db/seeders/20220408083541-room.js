'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Rooms', [{
         id: 1,
         title: 'MusicRoom',
         user_id:1,
         createdAt: new Date(),
         updatedAt: new Date(),
        
     },
     {
      id: 2,
      title: 'ClassicRoom',
      user_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
     
  },
  {
    id: 3,
    title: 'RockRoom',
    user_id:1,
    createdAt: new Date(),
    updatedAt: new Date(),
   
}], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Rooms', null, {});
     
  }
};
