const Candidate = require("../api/models/candidate.model");
const JobOpening = require("../api/models/job_opening.model");
const Application = require("../api/models/application.model");
const Company = require("../api/models/company.model");

const defineRelations = () => {
  //ONE TO ONE
  //   User.hasOne(Contact)
  //   Contact.belongsTo(User) //Will have the foreign key 'userId'

  //ONE TO MANY
  Company.hasMany(JobOpening)
  JobOpening.belongsTo(Company)

  // MANY TO MANY
  Candidate.belongsToMany(JobOpening, { through: Application });
  JobOpening.belongsToMany(Candidate, { through: Application });
  


  
  console.log("Relations defined");
};

module.exports = defineRelations;


