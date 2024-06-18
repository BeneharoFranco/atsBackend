const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');

router.get('/candidates', candidateController.getAllCandidates);
router.get('/candidates/:id', candidateController.getOneCandidate);
router.post('/candidates', candidateController.createCandidate);
router.put('/candidates/:id', candidateController.updateCandidate);
router.delete('/candidates/:id', candidateController.deleteCandidate);

module.exports = router;
