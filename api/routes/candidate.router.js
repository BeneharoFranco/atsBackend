const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');

router.get('/', candidateController.getAllCandidates);
router.get('/:id', candidateController.getOneCandidate);
router.post('/', candidateController.createCandidate);
router.put('/:id', candidateController.updateCandidate);
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;
