require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateContent = async (req, res) => {
  try {
    // Get the user's message from the request body
    const userMessage = req.body.message;

    // Use the user's message as the prompt for Gemini
    const result = await model.generateContent(userMessage);
    const response = result.response;
    const text = response.text();

    // Send the Gemini response as JSON (for your frontend)
    res.json({ reply: text });
  } catch (err) {
    console.error(err);
    res.json({ reply: "Sorry, I couldn't process your request right now." });
  }
};

module.exports = generateContent;
