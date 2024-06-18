const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Company = connection.define(
  "company",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.BLOB,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Company;
