const Candidate = require("../api/models/candidate.model");
const JobOpening = require("../api/models/job_opening.model");
const Application = require("../api/models/application.model");
const Company = require("../api/models/company.model");
//const User = require("../api/models/user.model");
//const Assignment = require("../api/models/assignment.model");

const defineRelations = () => {
  //ONE TO ONE
  //   User.hasOne(Contact)
  //   Contact.belongsTo(User) //Will have the foreign key 'userId'

  //ONE TO MANY
  Company.hasMany(JobOpening, {onDelete: 'cascade', onUpdate: 'cascade'})
  JobOpening.belongsTo(Company, {onDelete: 'cascade', onUpdate: 'cascade'})

  // MANY TO MANY
  Candidate.belongsToMany(JobOpening, { through: Application, onDelete: 'cascade', onUpdate: 'cascade' });
  JobOpening.belongsToMany(Candidate, { through: Application, onDelete: 'cascade', onUpdate: 'cascade' });
  


  
  Candidate.belongsToMany(JobOpening, { through: Application });
  JobOpening.belongsToMany(Candidate, { through: Application });

  //User.belongsToMany(JobOpening, { through: Assignment });
  //JobOpening.belongsToMany(User, { through: Assignment });

  console.log("Relations defined");
};

module.exports = defineRelations;


