const Application = require("../models/application.model");
const Candidate = require("../models/candidate.model");
const JobOpening = require("../models/job_opening.model");

const getAllApplication = async (req, res) => {
  try {
    const applications = await Application.findAll();

    res.json({
      result: applications,
    });
  } catch (error) {
    res.json(error);
  }
};

const getOneApplication = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);

    res.json({
      result: application,
    });
  } catch (error) {
    res.json(error);
  }
};

const createApplication = async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.body.candidateId);
    if (candidate == null) {
      return res.status(404).send("Candidate not found");
    }

    const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
    if (jobOpening == null) {
      return res.status(404).send("JobOpening not found");
    }

    const application = await Application.create(req.body);
    res.json({
      result: application,
    });
  } catch (error) {
    res.json(error);
  }
};

async function updateApplication(req, res) {
  try {
    if (req.body.candidateId) {
      const candidate = await Candidate.findByPk(req.body.candidateId);
      if (candidate == null) return res.status(404).send("Candidate not found");
    }

    if (req.body.jobOpeningId) {
      const jobOpening = await JobOpening.findByPk(req.body.jobOpeningId);
      if (jobOpening == null) return res.status(404).send("JobOpening not found");
    }

    const [applicationExist, application] = await Application.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (applicationExist !== 0) {
      return res
        .status(200)
        .json({ message: "Application updated", application: application });
    } else {
      return res.status(404).send("Application not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteApplication(req, res) {
  try {
    const application = await Application.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (application) {
      return res.status(200).json("Application deleted");
    } else {
      return res.status(404).send("Application not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllApplication,
  getOneApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};
