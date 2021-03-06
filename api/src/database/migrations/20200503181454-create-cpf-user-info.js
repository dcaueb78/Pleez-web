module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'cpf', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      defaultValue: '0'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'cpf');
  }
};
