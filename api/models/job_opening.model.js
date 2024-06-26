const { DataTypes, Sequelize } = require("sequelize");
const { connection } = require("../../database");

const JobOpening = connection.define(
  "job_opening",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posting_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    status: {
      type: DataTypes.ENUM('Open', 'Closed', 'On hold'),
      defaultValue: 'Open',
      allowNull: false,
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
