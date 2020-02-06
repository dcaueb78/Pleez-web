import Sequelize from 'sequelize';

import User from '../app/models/User';
import ProfessionalAccount from '../app/models/ProfessionalAccount';
import Restaurant from '../app/models/Restaurant';
import Category from '../app/models/Category';
import Dish from '../app/models/Dish';

import databaseConfig from '../config/database';

const models = [User, ProfessionalAccount, Restaurant, Category, Dish];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
