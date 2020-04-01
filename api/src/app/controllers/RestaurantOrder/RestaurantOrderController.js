import * as Yup from 'yup';

import Order from '../../schemas/Order';

class OrderController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pageLimit = 10;

    const orders = await Order.find({
      restaurant_id: req.body.restaurantId,
    })
      .sort({
        createdAt: 'desc'
      })
      .limit(pageLimit)
      .skip((page - 1) * 10);

    return res.json(orders);
  }
}

export default new OrderController();
