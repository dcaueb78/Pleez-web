import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.INTEGER,
        total_price: Sequelize.DOUBLE,
        is_available: Sequelize.BOOLEAN,
        comment: Sequelize.TEXT,
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
  }
}

export default Order ;
