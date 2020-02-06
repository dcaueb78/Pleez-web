import Sequelize, { Model } from 'sequelize';

class Dish extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        details: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        is_available: Sequelize.BOOLEAN,
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id'
    });

    this.belongsTo(models.Category, {
      foreignKey: 'category_id'
    })
  }
}

export default Dsh;
