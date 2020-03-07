module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'professional_accounts',
      'recipient_id',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('professional_accounts', 'recipient_id');
  }
};
