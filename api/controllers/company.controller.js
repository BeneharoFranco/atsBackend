const Company = require("../models/company.model");

const getAllCompany = async (req, res) => {
  try {
    const companies = await Company.findAll()
    res.json({
      result: companies,
    })
  } catch (error) {
    res.json(error)
  }
}

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    res.json({
      result: company,
    });
  } catch (error) {
    res.json(error);
  }
};

const createCompany = async (req, res) => {
  try {
    const company = await Company.findByPk(req.body.companyId);
    if (company == null) {
      const company = await Company.create(req.body);
      res.json({
        result: company,
      });
    } else {
      return res.status(302).send("Company found");
    }
  } catch (error) {
    res.json(error);
  }
};

async function updateCompany(req, res) {
  try {
    let update = true;
    if (req.body.companyId) {
      const company = await Company.findByPk(req.body.companyId);
      if (company == null) update = false;
    }

    if (update) {
      const [companyExist, company] = await Company.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        },
      });
      if (companyExist !== 0) {
        return res
          .status(200)
          .json({ message: "Compnay updated", company: company });
      } else {
        return res.status(404).send("Company not found");
      }
    } else {
      return res.status(404).send("Company not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteCompany(req, res) {
  try {
    const company = await Company.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (company) {
      return res.status(200).json("Company deleted");
    } else {
      return res.status(404).send("Company not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany,
};
