module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dishes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      details: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'restaurants',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      is_available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('dishes');
  }
};
