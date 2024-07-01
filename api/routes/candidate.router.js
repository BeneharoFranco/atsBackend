const express = require('express');
const router = express.Router();
const {
    getAllCandidates,
    getOneCandidate,
    createCandidate,
    updateCandidate,
    deleteCandidate,
} = require('../controllers/candidate.controller');

const {
    checkAuth,
    checkUser
  } = require('../middlewares')

router.get('/', checkAuth, checkUser, getAllCandidates);
router.get('/:id', checkAuth, checkUser, getOneCandidate);
router.post('/', /* checkAuth, checkUser, */ createCandidate);
router.put('/:id', checkAuth, checkUser, updateCandidate);
router.delete('/:id', checkAuth, checkUser, deleteCandidate);

module.exports = router;
