module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('restaurants', 'recipient_id', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'not_exists'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('restaurants', 'recipient_id');
  }
};
