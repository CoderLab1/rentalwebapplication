const Feedback = require('../models/feedbackModel');

// Add feedback
const addFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;
    const feedback = new Feedback({ name, email, message, rating });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add feedback' });
  }
};

// Get all feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
};

// Update feedback (only by the owner)
const editFeedback = async (req, res) => {
  const { id } = req.params;
  const { message, rating } = req.body;

  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });

    if (feedback.email !== req.user.email) {
      return res.status(403).json({ message: "Unauthorized to edit this feedback" });
    }

    feedback.message = message;
    feedback.rating = rating;
    await feedback.save();

    res.json({ message: "Feedback updated", feedback });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete feedback (only by the owner)
const deleteFeedback = async (req, res) => {
    const { id } = req.params;
  
    try {
      const feedback = await Feedback.findById(id);
      if (!feedback) return res.status(404).json({ message: "Feedback not found" });
  
      // Debug logs here 👇
      console.log("feedback.email:", feedback.email);
      console.log("req.user.email:", req.user.email);
  
      // Handle case-insensitive email check
      if (feedback.email.toLowerCase() !== req.user.email.toLowerCase()) {
        return res.status(403).json({ message: "Unauthorized to delete this feedback" });
      }
  
      await feedback.deleteOne();
      res.json({ message: "Feedback deleted successfully" });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = { addFeedback, getAllFeedbacks, editFeedback, deleteFeedback };
