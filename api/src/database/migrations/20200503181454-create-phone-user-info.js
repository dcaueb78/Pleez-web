module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '0'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'phone');
  }
};
