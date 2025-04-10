const express = require('express');
const router = express.Router();
const {
  addFeedback,
  getAllFeedbacks,
  editFeedback,
  deleteFeedback
} = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware'); // for JWT auth

// Routes
router.post('/', authMiddleware, addFeedback);          // Add feedback
router.get('/', getAllFeedbacks);                       // Get all feedbacks
router.put('/:id', authMiddleware, editFeedback);       // Edit feedback by ID
router.delete('/:id', authMiddleware, deleteFeedback);  // Delete feedback by ID

module.exports = router;
