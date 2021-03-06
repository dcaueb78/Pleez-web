module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('restaurants', 'recipient_id', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'not_exists'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('restaurants', 'recipient_id');
  }
};
