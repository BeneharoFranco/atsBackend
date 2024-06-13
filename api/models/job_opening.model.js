const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const JobOpening = connection.define(
  "job_opening",
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
    },
    posting_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = JobOpening;
