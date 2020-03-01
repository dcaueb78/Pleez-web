import * as Yup from 'yup';
import Order from '../../schemas/Order';
import Dish from '../../models/Dish';
class OrderController {
  async index(req, res) {
    const schema = Yup.object().shape({
      userId: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const orders = await Order.find({
      user_id: req.params.userId
    })
      .sort('createdAt')
      .limit(10);

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      dishes: Yup.array().required(),
      restaurant_id: Yup.number().required(),
      chair: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    async function findDishDetailsById (id) {
      const dishDetails = await Dish.findByPk(id);
      return dishDetails;
    }

    let priceTemp = 0;
    const totalPrice = await Promise.all(req.body.dishes.map(async dish => {
      const dishDetails = await findDishDetailsById(dish.dish_id);
      priceTemp += dishDetails.price * dish.quantity;
    }));

    const { id, status, chair } = await Order.create({
      ...req.body,
      user_id: req.userId,
      total_price: priceTemp
    });

    return res.status(200).json({ id, status, chair });
  }
}

export default new OrderController();
