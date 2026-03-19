**Real-Time Chat Application (MERN + Socket.IO)**

A full-stack real-time chat application built using the MERN stack with Socket.IO for instant messaging.

Live URL: https://chat-app-q79a.onrender.com

**What is it?**

This is a real-time chat app where users can:

Sign up and log in securely

View other users

Start conversations

Send and receive messages instantly

See online users in real-time

**How does it work?**
**Backend (Node.js + Express)**

Handles authentication (JWT + cookies)

Stores users, messages, and conversations in MongoDB

Uses Socket.IO for real-time communication

**Frontend (React + Vite)**

Built with React + Tailwind CSS + DaisyUI

Uses Zustand for state management

Handles UI, messaging, and user interactions

**Real-time Communication**

Socket.IO connects users

Messages are instantly delivered without refresh

Online users are tracked using socket connections

**Tech Stack**
Frontend:

React.js (Vite)

Tailwind CSS + DaisyUI

Zustand (state management)

React Router

Socket.IO Client

Backend:

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Socket.IO

bcrypt (password hashing)

**Features**

User Authentication (Signup/Login/Logout)

Secure JWT-based sessions (HTTP-only cookies)

Real-time messaging (Socket.IO)

Online user status

Conversation-based messaging

Responsive UI

Toast notifications

Auto-scroll messages

**Installation & Setup**
Clone the repository
git clone https://github.com/your-username/chat-app.git
cd chat-app
Install dependencies
npm install
npm install --prefix frontend
Setup environment variables

Create a .env file in backend/:

MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the application
Development:
npm run server
npm run dev --prefix frontend
Production:
npm run build
npm start

