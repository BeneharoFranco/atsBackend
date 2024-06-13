const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const User = connection.define(
  "user",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.BLOB,
    },
    valid: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = User;
