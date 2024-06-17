const Candidate = require('../models/candidate.model');

const getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.findAll();
        res.json({
            message: "Candidates fetched",
            result: candidates,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching candidates",
            error: error.message
        });
    }
};

const getOneCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.findByPk(req.params.id);
        if (candidate) {
            res.json({
                message: "Candidate fetched",
                result: candidate,
            });
        } else {
            res.status(404).json({
                message: "Candidate not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error fetching candidate",
            error: error.message
        });
    }
};

const createCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.create(req.body);
        res.status(201).json({
            message: 'Candidate created',
            result: candidate,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating candidate",
            error: error.message
        });
    }
};

const updateCandidate = async (req, res) => {
    try {
        const [updated] = await Candidate.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCandidate = await Candidate.findByPk(req.params.id);
            res.json({
                message: 'Candidate updated',
                result: updatedCandidate,
            });
        } else {
            res.status(404).json({
                message: "Candidate not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error updating candidate",
            error: error.message
        });
    }
};

const deleteCandidate = async (req, res) => {
    try {
        const deleted = await Candidate.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                message: 'Candidate deleted',
            });
        } else {
            res.status(404).json({
                message: "Candidate not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error deleting candidate",
            error: error.message
        });
    }
};

module.exports = {
    getAllCandidates,
    getOneCandidate,
    createCandidate,
    updateCandidate,
    deleteCandidate
};
