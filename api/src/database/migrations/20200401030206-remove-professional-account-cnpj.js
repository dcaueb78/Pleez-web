module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('professional_accounts', 'cnpj');
  },
  down: queryInterface => {
    return queryInterface.addColumn('professional_accounts', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '00000000000000'
    });
  }
};
