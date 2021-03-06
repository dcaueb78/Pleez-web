import * as Yup from 'yup';
import uploadImage from '../../../utils/uploadFileBucket';

import Category from '../../models/Category';

class CategoryFileController {
  async store(req, res) {
    const schema = Yup.object().shape({
      category_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    let imageUrl;
    try {
      const myFile = req.file;
      imageUrl = await uploadImage(myFile);
    } catch (error) {
      return res.status(400).json({ error: 'Arquivo inválido' });
    }

    const updatedCategory = await Category.update(
      {
        image_url: imageUrl
      },
      {
        where: {
          id: req.body.category_id
        }
      }
    );

    return res.json({ updatedCategory });
  }
}

export default new CategoryFileController();
