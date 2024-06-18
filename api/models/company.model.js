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
      validate: {
        is: {
          args: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/,
          msg: "Error: Wrong phone format.",
        },
      },
    },
    logo: {
      type: DataTypes.BLOB,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          msg: "Error: Wrong email format.",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Company;
