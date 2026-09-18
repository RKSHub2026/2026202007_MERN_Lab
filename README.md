# Student Notes CRUD Micro-App (MERN)

**Student Name:** Rahul Kumar Singh
**Student ID:** 2026202007
**GitHub Repository:** https://github.com/RKSHub2026/2026202007_MERN_Lab

A full-stack notes management application built with MongoDB, Express, React (Vite), and Node.js.

## Features

- Create notes with a title and content
- View all notes, newest first
- Delete notes with immediate UI sync (no page refresh)
- Loading and empty states on the client

## Tech Stack

- **Backend:** Node.js, Express, Mongoose
- **Frontend:** React (via Vite), Axios
- **Database:** MongoDB (local instance)

## Prerequisites

- Node.js (v18+ recommended)
- npm
- A local MongoDB daemon running on the default port (`mongod`)

## Setup & Run Instructions

### 1. Start MongoDB

Make sure a local MongoDB server is running, e.g.:

```bash
mongod
```

The server connects to `mongodb://localhost:27017/notes_db` by default — no extra configuration needed.

### 2. Backend Setup

```bash
cd server
npm install
npm start
```

The Express API will run on **http://localhost:5000**.

### 3. Frontend Setup

In a separate terminal:

```bash
cd client
npm install
npm run dev
```

The React app will run on **http://localhost:5173**.

### 4. Use the App

Open http://localhost:5173 in your browser. Add a note, watch it appear in the list, and delete it to see the list update instantly.

## API Endpoints

| Method | Endpoint            | Description                          |
|--------|----------------------|---------------------------------------|
| POST   | `/api/notes`         | Create a new note (201 Created)       |
| GET    | `/api/notes`         | Get all notes (sorted newest first)   |
| DELETE | `/api/notes/:id`     | Delete a note by ID (200 OK / 404)    |

## Project Structure

```
notes-app/
|-- .gitignore
|-- README.md
|-- screenshots/
|   |-- ui-preview.png
|   |-- delete-action.png
|-- server/
|   |-- config/db.js
|   |-- models/Note.js
|   |-- routes/noteRoutes.js
|   |-- package.json
|   |-- server.js
|-- client/
    |-- index.html
    |-- vite.config.js
    |-- package.json
    |-- src/
        |-- App.jsx
        |-- main.jsx
        |-- index.css
```


