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
      return res.status(404).send("User not found or not exist");
    }

    const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
    if (jobOpening == null) {
      return res.status(404).send("jobOpening not found or not exist");
    }

    const assignment = await Assignment.create(req.body);
    res.status(200).json({  result: assignment,   });

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function updateAssignment(req, res) {
  
  try {
    const user = await User.findByPk(req.body.userId);
    if (user == null) {
      return res.status(404).send("User not found or not exist");
    }

    const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
    if (jobOpening == null) {
      return res.status(404).send("jobOpening not found or not exist");
    }

    const [assignmentRows, assignment] = await Assignment.update(req.body,
     {
        where: {
          id: req.params.id
        }
      }
    );

    if (assignmentRows !== 0){
      res.status(200).json({
        message: "Assignment updated",
        assignment: assignment,
      });
    }else{
      return res.status(404).send("Assignment not found or not exist");
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating Assignment",
      result: error,
    });
  }
};

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
