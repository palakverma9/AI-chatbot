# BestieBot 🖤 — An AI-Powered Customer Support Chatbot
BestieBot is a friendly and intelligent chatbot designed to act as your supportive companion. Powered by Google Gemini (free API), it responds to your messages with real AI-generated replies. This project is ideal as a learning tool, a portfolio piece, or a foundation for your own chatbot ideas.

## Features

- Real AI chat: Gemini-powered responses for every message.
- Modern UI: Clean, dark-themed chat interface.
- Easy to use: Send messages by pressing Enter or clicking Send.
- Fast and free: Uses Google Gemini’s free API tier.
- Secure: API keys managed with dotenv.

## Tech Stack

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express.js
- AI API: Google Gemini (via [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai))
- Dev Tools: dotenv, CORS, Git

## File Structure

ai_chatbot_godspeed/
├── index.html # Chatbot frontend
├── server.js # Node.js backend (Express + Gemini)
├── .env # Your Gemini API key (not committed)
├── package.json
├── package-lock.json
└── README.md

## Getting Started

### 1. Clone the Repo

git clone https://github.com/<your-username>/ai_chatbot_godspeed.git
cd ai_chatbot_godspeed

text

### 2. Install Dependencies

npm install

text

### 3. Set Up Your Gemini API Key

- Get a free API key from Google AI Studio (https://aistudio.google.com/).
- Create a `.env` file in your project root:
GEMINI_API_KEY=your_actual_gemini_api_key_here

text

### 4. Start the Backend Server

node server.js

text

### 5. Launch the Frontend

- Open `index.html` directly in your browser.

## Usage

- Type your message and press Enter or click Send.
- The bot will reply instantly with an AI-generated response.
- Try greetings, questions, or even jokes.

## Sample Interactions

| You                     | BestieBot (AI)                                |
|-------------------------|-----------------------------------------------|
| hi                      | Hello! How can I help you today?              |
| how are you?            | I'm doing well. Hope you're feeling great too.|
| tell me a joke          | Why did the robot go on a diet? Because it had too many bytes! |
| what is generative AI?  | Generative AI refers to artificial intelligence that can create new content, such as text, images, or music, based on prompts. |

## Security Note

- Never share your `.env` file or API keys publicly.
- `.env` is already in `.gitignore` for your safety.

## Credits & License

- Built for the Godspeed internship challenge.
- Powered by Google Gemini.
- MIT License.

If you like this project, star the repo and share your feedback.
