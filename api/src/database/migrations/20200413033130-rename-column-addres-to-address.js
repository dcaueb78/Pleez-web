module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('restaurants', 'addres', 'address');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('restaurants', 'address', 'addres');
  }
};
