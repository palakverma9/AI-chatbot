const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config(); // For safely using your API key

const cors = require('cors');
const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PORT = 3000;

// Middleware to parse JSON body from requests
app.use(cors());
app.use(express.json());

// Simple route to check server is working
app.get('/', (req, res) => {
  res.send('Hello from Chatbot Server!');
});

// Endpoint to receive messages
app.post('/message', (req, res) => {
  const userMessage = req.body.message;

  // Simple logic-based reply (you can expand this later!)
  let botReply;

  if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
    botReply = "Hey bestie! 💖 How can I help you today?";
  } else if (userMessage.toLowerCase().includes("how are you")) {
    botReply = "I'm doing amazing! Hope you're feeling great too 😊";
  } else {
    botReply = `You said: "${userMessage}". I'm just a sweet mock bot for now 💬`;
  }

  res.json({ reply: botReply });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
