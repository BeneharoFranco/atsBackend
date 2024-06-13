const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Candidate = connection.define(
  "candidate",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    resume: {
      type: DataTypes.BLOB,
    },
    photo: {
      type: DataTypes.BLOB,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Candidate;
