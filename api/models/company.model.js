const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Company = connection.define(
  "company",
  {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.BLOB,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Company;
