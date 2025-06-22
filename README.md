# AI-chatbot
AI-powered chatbot project
A simple and elegant AI-powered chatbot built using **Node.js** , **Express** , and **HTML/CSS** , desgined to simulate human-like conversations. This chatbot is capable of responding to user input with either fixed responses or using OpenAI's API for smart replies (when enabled).

---

## Features 
- Real-time messaging
- Backend with dummy/fixed responses
- Clean black & white gradient UI
- Backend built with Node.js + Express
- "Bot is typing..." animation
I initially intended to integrate OpenAI's GPT-3.5 model to generate dynamic responses using the OpenAI API. However, due to exceeding the free-tier quota limits, I was unable to proceed with the integration.

As a workaround, this version uses fixed responses handled through conditional logic in the Express server.
---

## Project Structure
AI_ChatBot_Godspeed/
├── index.html # Frontend UI
├── server.js # Node.js backend server
├── package.json # Project dependencies
├── .env # (Not included) Stores OpenAI API Key
└── .gitignore # Prevents uploading node_modules and .env

---

## Getting Started 
- to clone the repo
git clone https://github.com/your-username/AI-chatbot.git
cd AI-chatbot

- install dependencies
npm install


