const { DataTypes } = require("sequelize");
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
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Application;
