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
    // status from 1 to 5 on DB; 
    //When we get the number in frontend we will change it to the specific status word
    status: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      defaultValue: '1',
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Assignment;
