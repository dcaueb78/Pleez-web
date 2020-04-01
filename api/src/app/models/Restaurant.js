import Sequelize, { Model } from 'sequelize';

class Restaurant extends Model {
  static init(sequelize) {
    super.init(
      {
        social_reason: Sequelize.STRING,
        name: Sequelize.STRING,
        telephone: Sequelize.BIGINT,
        cep: Sequelize.BIGINT,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        addres: Sequelize.STRING,
        number: Sequelize.BIGINT,
        recipient_id: Sequelize.STRING,
        cnpj: Sequelize.STRING,
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
