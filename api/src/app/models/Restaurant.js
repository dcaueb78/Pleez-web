import Sequelize, { Model } from 'sequelize';

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        social_reason: Sequelize.STRING,
        name: Sequelize.STRING,
        telephone: Sequelize.INTEGER,
        cep: Sequelize.INTEGER,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        addres: Sequelize.STRING,
        number: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.ProfessionalAccount, {
      foreignKey: 'professional_account_id'
    });
  }
}

export default Restaurant;
