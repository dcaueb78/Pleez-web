import Sequelize from 'sequelize';

import User from '../app/models/User';
import ProfessionalAccount from '../app/models/ProfessionalAccount';
import Restaurant from '../app/models/Restaurant';

import databaseConfig from '../config/database';

const models = [User, ProfessionalAccount, Restaurant];

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
