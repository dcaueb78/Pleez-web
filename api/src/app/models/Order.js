import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.INTEGER,
        TotalPrice: Sequelize.DOUBLE,
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

    this.belongsTo(models.Dish, {
      foreignKey: 'dish_id'
    })

    this.hasMany(models.Dish);
  }
}

export default Order ;
