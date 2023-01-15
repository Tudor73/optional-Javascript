'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'Users',
                'roleId',
                {
                    type: Sequelize.INTEGER
                }
            )
        ]),
            queryInterface.addColumn(
                'Users',
                'createdId',
                {
                    type: Sequelize.INTEGER
                }
            )
  },

  async down (queryInterface, Sequelize) {
      queryInterface.removeColumn('Users', 'roleId'),
      queryInterface.removeColumn('Users', 'createdId')
  }
};
