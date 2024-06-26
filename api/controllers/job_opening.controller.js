const JobOpening = require("../models/job_opening.model");
const Company = require("../models/company.model");

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

const getAllApplicationByJobOpening = async (req, res) => {
  try {
    const jobOpening = await JobOpening.findByPk(req.params.id);
    const applications = await jobOpening.getCandidates();

    res.json({
      result: {
        jobOpening,
        applications
      },
    });
  } catch (error) {
    console.log(error)
    res.json(error);
  }
};

const createJobOpening = async (req, res) => {
  try {
    const company = await Company.findByPk(req.body.companyId)
    if(company != null){
        const jobOpening = await JobOpening.create(req.body);
        res.json({
          result: jobOpening,
        });
    } else{
        return res.status(404).send('Company not found')
    }
    
  } catch (error) {
    res.json(error);
  }
};

async function updateJobOpening(req, res) {
	try {
        let update = true;
        if(req.body.companyId){
            const company = await Company.findByPk(req.body.companyId)
            if(company == null)
                update = false;
        }

        if(update){
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
        } else{
            return res.status(404).send('Company not found')
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
  getAllApplicationByJobOpening,
  createJobOpening,
  updateJobOpening,
  deleteJobOpening
};
