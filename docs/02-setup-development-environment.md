# 02/15 — Set Up the Development Environment

> **Goal:** Install Node.js, npm, VS Code and create the project folders.

## Prerequisites
- Windows 10/11, macOS (Apple Silicon or Intel) or Linux (Ubuntu)
- An active internet connection

## Step 1 — Install Node.js and npm
1. Go to <https://nodejs.org>
2. Download the **LTS** (Long Term Support) version
3. Run the installer and follow the setup wizard
4. Node.js already includes **npm** (Node Package Manager)

## Step 2 — Verify the installation
```bash
node -v    # e.g. v20.11.1
npm -v     # e.g. 10.2.4
```
If you see version numbers, both are installed correctly.

## Step 3 — Install Visual Studio Code
1. Go to <https://code.visualstudio.com>
2. Download the installer for your operating system and install it
3. (Optional) install useful extensions:

| Extension | Why |
|---|---|
| ES7+ React Snippets | Shortcuts like `rafce` for components |
| Prettier – Code Formatter | Automatic code formatting |
| ESLint | Finds mistakes in JavaScript |
| GitLens (optional) | Git history inside VS Code |

> This project already contains `.vscode/extensions.json`, so VS Code will **suggest** these extensions when you open the folder.

## Step 4 — Create the project folder structure
```
mern-dating-app
├── client        → React frontend
├── server        → Node.js / Express backend
├── README.md     (optional)
└── .gitignore    (optional)
```

### Using the terminal
```bash
# Create main project folder
mkdir mern-dating-app
cd mern-dating-app

# Create client and server folders
mkdir client server

# Open in VS Code
code .
```

## Step 5 — Open the project in VS Code
Open the folder (`File → Open Folder`). The Explorer should show `client`, `server`, `README.md`, `.gitignore`.

## Naming note
Infographic 08 calls the backend folder `mern-dating-backend`. In this project we use the folder name **`server`** (as taught here in infographic 02) and the npm package name is `mern-dating-backend`.

## Key takeaway
Node.js, npm and VS Code are installed and the folder structure is ready.

➡️ **Next:** [03 — Configure Firebase Hosting](03-configure-firebase-hosting.md)
