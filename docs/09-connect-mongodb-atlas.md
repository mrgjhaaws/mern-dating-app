# 09/15 — Connect MongoDB Atlas to the Dating App Backend

> **Goal:** Set up a free cloud database and connect it with Express using **Mongoose**.

```
MongoDB Atlas (cloud DB)  <--store/read-->  Mongoose (ODM)  <-->  Express (Node.js backend)
```

## Steps

### 1. Create an Atlas account
<https://www.mongodb.com/cloud/atlas> → sign up → **Build a Database** → choose the **Free (M0)** plan.

### 2. Create a cluster
Choose a provider (e.g. AWS) → choose the region closest to you (e.g. Mumbai `ap-south-1`) → **Create Deployment**.

### 3. Create a database user
**Database Access → Add New Database User** → username (e.g. `mernuser`) + password → privilege *Read and write to any database* → **Add User**.

### 4. Allow network access
**Network Access → Add IP Address** → *Allow access from anywhere* (`0.0.0.0/0`) for development → **Confirm**.
> For production restrict this to your server’s IP addresses whenever possible.

### 5. Get the connection string
**Clusters → Connect → Connect your application** → driver *Node.js* → copy the string:
```
mongodb+srv://mernuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
Replace `<password>` with your real password. If it contains special characters (`@ : / #`) URL-encode them.

### 6. Install Mongoose
```bash
npm install mongoose
```

### 7. Put the string in `.env`
```
PORT=5000
MONGODB_URI=mongodb+srv://mernuser:yourPassword@cluster0.xxxxx.mongodb.net/mern-dating?retryWrites=true&w=majority
```
`mern-dating` after `.net/` is the database name (Atlas creates it automatically).

### 8. Connect in `index.js`
```js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Error:', err));
```
> The infographic repeats a few deprecated options. Mongoose 7/8 needs no extra options.

### 9. Run
```bash
npm start
# ✅ Connected to MongoDB
# Server running on port 5000
```

### 10. Verify in Atlas
**Browse Collections** — collections appear after the first insert (next step).

## Key takeaway
Atlas account, cluster, user and network access are ready; the backend is connected and can store and read dating profiles.

➡️ **Next:** [10 — First API route](10-create-and-test-first-api-route.md)
