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
      validate: {
        is: {
          args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          msg: "Error: Wrong email format.",
        },
      },
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
