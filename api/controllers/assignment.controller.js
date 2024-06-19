const Assignment = require("../models/assignment.model");
const JobOpening = require("../models/job_opening.model");
const User = require("../models/user.model");

const getAllAssignments = async (req, res) => {
  try {
    const assignment = await Assignment.findAll();

    res.status(200).json({
      result: assignment,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getOneAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByPk(req.params.id);

    res.status(200).json({
      result: assignment,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createAssignment = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (user == null) {
      return res.status(404).send("User not found");
    }

    const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
    if (jobOpening == null) {
      return res.status(404).send("JobOpening not found");
    }

    const assignment = await Assignment.create(req.body);
    res.json({
      result: assignment,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function updateAssignment(req, res) {
  try {
    if(req.body.userId){
      const user = await User.findByPk(req.body.userId);
      if (user == null) return res.status(404).send("User not found");
    }

    if(req.body.jobOpeningId){
      const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
      if (jobOpening == null) return res.status(404).send("JobOpening not found");
    }

    const [assignmentExist, assignment] = await Assignment.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (assignmentExist !== 0) {
      return res
        .status(200)
        .json({ message: "Assignment updated", assignment: assignment });
    } else {
      return res.status(404).send("Assignment not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteAssignment(req, res) {
  try {
    const assignment = await Assignment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (assignment) {
      return res.status(200).json("assignment deleted");
    } else {
      return res.status(404).send("assignment not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllAssignments,
  getOneAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
};
