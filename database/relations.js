// const User = require("../api/models/user.model")
// const Pet = require("../api/models/pet.model")
// const Contact = require("../api/models/contact.model")
// const Food = require("../api/models/food.model")
// const Food_Pet = require('../api/models/Food_Pet')

const Candidate = require("../api/models/candidate.model");
const JobOpening = require("../api/models/job_opening.model");
const Application = require("../api/models/application.model");
const User = require("../api/models/user.model");
const Assignment = require("../api/models/assignment.model");

const defineRelations = () => {
  //ONE TO ONE
  //   User.hasOne(Contact)
  //   Contact.belongsTo(User) //Will have the foreign key 'userId'

  //ONE TO MANY
  //   User.hasMany(Pet)
  //   Pet.belongsTo(User) //Will have the foreign key 'userId'

  // MANY TO MANY
  Candidate.belongsToMany(JobOpening, { through: Application });
  JobOpening.belongsToMany(Candidate, { through: Application });

  User.belongsToMany(JobOpening, { through: Assignment });
  JobOpening.belongsToMany(User, { through: Assignment });

  console.log("Relations defined");
};

module.exports = defineRelations;
