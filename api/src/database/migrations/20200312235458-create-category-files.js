module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'image_id', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'not_exists'
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('categories', 'image_id');
  }
};
