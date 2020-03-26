require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  replication: {
    read: [
      { host: process.env.DB_HOST_READ, username: process.env.DB_USER, password: process.env.DB_PASS },
    ],
    write: { host: process.env.DB_HOST_WRITE, username: process.env.DB_USER, password: process.env.DB_PASS }
  },
};
