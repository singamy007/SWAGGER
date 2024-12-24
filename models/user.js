import { Sequelize, DataTypes } from 'sequelize';

// Connect to PostgreSQL
const sequelize = new Sequelize('example_db', 'postgres', 'ahamed@1', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

await sequelize.sync(); // Sync the database
export default User;
