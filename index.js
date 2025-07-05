const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check route
app.get('/', (req, res) => {
  res.send('Hello from BestieBot using Gemini!');
});

// Chatbot endpoint
app.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || typeof userMessage !== 'string' || !userMessage.trim()) {
    return res.status(400).json({ reply: "Please enter a valid message." });
  }

  try {
    // Use Gemini 1.5 Flash for speed (or 'gemini-pro' for more capability)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(userMessage);

    // Some SDK versions require .response.text(), others .response.candidates[0].content.parts[0].text
    // This works for most current SDKs:
    let botReply = "";
    if (result && result.response && typeof result.response.text === "function") {
      botReply = result.response.text();
    } else if (
      result &&
      result.response &&
      result.response.candidates &&
      result.response.candidates[0] &&
      result.response.candidates[0].content &&
      result.response.candidates[0].content.parts &&
      result.response.candidates[0].content.parts[0] &&
      result.response.candidates[0].content.parts[0].text
    ) {
      botReply = result.response.candidates[0].content.parts[0].text;
    } else {
      botReply = "Sorry, I couldn't understand the response from Gemini.";
    }

    res.json({ reply: botReply.trim() });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.json({ reply: "Sorry, I couldn't process your request right now." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
