import Restaurant from '../models/Restaurant';

class RestaurantController {
  async store(req, res) {
    res.json({ ok: 'true' });
  }
}

export default new RestaurantController();
