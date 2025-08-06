// server/routes/applicants.js

const router = require('express').Router();
let Applicant = require('../models/applicant.model');

// GET: Fetch all applicants
// Route: /api/applicants/
router.route('/').get((req, res) => {
  Applicant.find()
    .sort({ createdAt: -1 }) // Sort by creation date, newest first
    .then(applicants => res.json(applicants))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST: Add a new applicant
// Route: /api/applicants/
router.route('/').post((req, res) => {
  const { name, email, interest } = req.body;

  const newApplicant = new Applicant({
    name,
    email,
    interest,
  });

  newApplicant.save()
    .then((applicant) => res.json({ message: 'Applicant added!', applicant }))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
