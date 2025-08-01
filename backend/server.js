require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define schema and model
const responseSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Response = mongoose.model('Response', responseSchema);

// POST endpoint to save responses
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const saved = await Response.create({ name, email, message });
        res.json({ status: 'success', saved });
    } catch (error) {
        res.status(500).json({ status: 'error', error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
