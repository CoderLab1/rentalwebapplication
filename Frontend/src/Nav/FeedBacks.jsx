import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Feedbacks = () => {
  const { user } = useContext(UserContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const name = user?.username;
  const email = user?.email;

  const [editingId, setEditingId] = useState(null);

  const handleEdit = (fb) => {
    setEditingId(fb._id);
    setMessage(fb.message);
    setRating(fb.rating);
    setShowForm(true);
  };

  const navigate = useNavigate();

  const getAllFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedbacks');
      setFeedbacks(res.data || []);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (editingId) {
        // 🔁 Update existing feedback
        await axios.put(
          `http://localhost:5000/api/feedbacks/${editingId}`,
          { message, rating },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        // 🆕 Add new feedback
        await axios.post(
          "http://localhost:5000/api/feedbacks",
          { name, email, message, rating },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      // Reset form
      setEditingId(null);
      setMessage("");
      setRating(5);
      setShowForm(false);
      await getAllFeedbacks();
    } catch (error) {
      console.error("❌ Error submitting feedback:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/feedbacks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh feedbacks after deletion
      await getAllFeedbacks();
    } catch (err) {
      console.error("❌ Error deleting feedback:", err);
    }
  };

  return (
    <div className="pt-32 px-4 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-10 drop-shadow-sm tracking-tight">
        User Feedbacks 💬
      </h2>

      {/* Add Feedback Button */}
      <div className="flex justify-center mb-8">
  <button
    onClick={() => {
      if (!user) {
        alert("Please login first!");
        navigate("/login"); // 👈 Ye tab chalega jab alert OK kiya jaaye
        return;
      }
      setShowForm(!showForm);
    }}
    className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg font-semibold transition duration-300"
  >
    {showForm ? "Cancel" : "➕ Add Your Feedback"}
  </button>
</div>


      {/* Feedback Form */}
      {showForm && user && (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border space-y-6 mb-14"
        >
          <div className="text-sm text-gray-600">
            Logged in as:{" "}
            <span className="font-semibold text-gray-800">{user?.username}</span>
          </div>

          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium">Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md focus:outline-blue-400"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {"★".repeat(r)}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold shadow-lg transition"
          >
            {editingId ? "Update Feedback" : "Submit Feedback"}
          </button>
        </form>
      )}

      {/* Feedback Cards */}
      <div className="max-w-4xl mx-auto space-y-8 pb-24">
        {feedbacks.length > 0 ? (
          feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold uppercase shadow">
                    {fb.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{fb.name}</p>
                    <p className="text-sm text-gray-500">{fb.email}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-xl font-bold">
                  {"★".repeat(fb.rating)}
                  {"☆".repeat(5 - fb.rating)}
                </div>
              </div>

              <p className="text-gray-700 text-base mb-4 leading-relaxed">{fb.message}</p>

              {user?.email === fb.email && (
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => handleEdit(fb)}
                    className="px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(fb._id)}
                    className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No feedbacks yet.</p>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;