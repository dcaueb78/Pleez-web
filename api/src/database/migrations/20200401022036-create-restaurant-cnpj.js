module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('restaurants', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '00000000000000'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('restaurants', 'cnpj');
  }
};
