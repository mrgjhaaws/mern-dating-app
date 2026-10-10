# 08/15 — Set Up the Node.js and Express Backend

> **Goal:** Create a backend server that handles API requests for the Dating App.

## Architecture
```
React Frontend  --API request-->  Express (Node.js)  --read/write-->  MongoDB Atlas
(Vercel/Firebase) <--JSON--       (Render/Heroku)     <--data--
```

## Steps

### 1–2. Create and enter the backend folder
```bash
mkdir server        # infographic uses: mkdir mern-dating-backend
cd server
code .
```

### 3. Initialize Node.js
```bash
npm init -y        # creates package.json
```

### 4. Install dependencies
```bash
npm install express cors dotenv
```
| Package | Purpose |
|---|---|
| express | Web framework for Node.js |
| cors | Allows the frontend (another origin) to call the API |
| dotenv | Loads variables from `.env` |

### 5. Create `index.js`
```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'MERN Dating App Backend is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 6. Create `.env`
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
`MONGODB_URI` is filled in the next step.

### 7. Add scripts to `package.json`
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
```bash
npm start                  # run once
npm install -D nodemon     # auto-restart tool
npm run dev
```

### 8. Test
Open <http://localhost:5000> — you should see:
```json
{ "message": "MERN Dating App Backend is running!" }
```

### 9. Folder structure
```
server/
├── node_modules/
├── index.js        → Express server
├── package.json    → project config
├── package-lock.json
└── .env            → environment variables (never commit!)
```

## Files in this project
`server/index.js`, `server/package.json`, `server/.env.example` (copy to `.env`).

## Key takeaway
A working Express backend with CORS, environment variables and a test route.

➡️ **Next:** [09 — Connect MongoDB Atlas](09-connect-mongodb-atlas.md)
