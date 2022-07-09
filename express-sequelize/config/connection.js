const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // database name
    process.env.DB_NAME,
    // mysql user
    process.env.DB_USER,
    // mysql password
    process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
}
)

module.exports = sequelize;