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
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function updateAssignment(req, res) {
 try {
    
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
