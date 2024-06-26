const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Assignment = connection.define(
  "assignment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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

module.exports = Assignment;

