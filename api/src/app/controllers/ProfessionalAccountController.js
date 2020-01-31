import ProfessionalAccont from '../models/ProfessionalAccount';

class ProfessionalAccountController {
  async store(req, res) {
    res.json({ ok: 'true' });
  }
}

export default new ProfessionalAccountController();
