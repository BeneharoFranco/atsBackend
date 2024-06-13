const JobOpening = require("../models/job_opening.model");

const getAllJobOpening = async (req, res) => {
  try {
    const jobOpenings = await JobOpening.findAll();

    res.json({
      result: jobOpenings,
    });
  } catch (error) {
    res.json(error);
  }
};

const getOneJobOpening = async (req, res) => {
  try {
    const jobOpening = await JobOpening.findByPk(req.params.id);

    res.json({
      result: jobOpening,
    });
  } catch (error) {
    res.json(error);
  }
};

const createJobOpening = async (req, res) => {
  try {
    const jobOpening = await JobOpening.create(req.body);
    res.json({
      result: jobOpening,
    });
  } catch (error) {
    res.json(error);
  }
};

async function updateJobOpening(req, res) {
	try {
		const [jobOpeningExist, jobOpening] = await JobOpening.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (jobOpeningExist !== 0) {
			return res.status(200).json({ message: 'JobOpening updated', jobOpening: jobOpening })
		} else {
			return res.status(404).send('JobOpening not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteJobOpening(req, res) {
	try {
		const jobOpening = await JobOpening.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (jobOpening) {
			return res.status(200).json('JobOpening deleted')
		} else {
			return res.status(404).send('JobOpening not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
  getAllJobOpening,
  getOneJobOpening,
  createJobOpening,
  updateJobOpening,
  deleteJobOpening
};
