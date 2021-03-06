module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      social_reason: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telephone: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      cep: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      addres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      professional_account_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'professional_accounts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
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
    return queryInterface.dropTable('restaurants');
  }
};
