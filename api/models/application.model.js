const { DataTypes, Sequelize } = require("sequelize");
const { connection } = require("../../database");

const Application = connection.define(
  "application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
    application_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    status: {
      type: DataTypes.ENUM('Without seeing', 'First interview', 'Second interview', 'Hired'),
      defaultValue: 'Without seeing',
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Application;
