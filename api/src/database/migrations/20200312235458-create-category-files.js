module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'image_url', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('categories', 'image_url');
  }
};
