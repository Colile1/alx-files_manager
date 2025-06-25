# Files Manager

A simple file management API built with Node.js, Express, MongoDB, and Redis.

## Features

- User authentication (sign up, login, logout)
- File upload, listing, and retrieval
- Folder support
- Public/private file publishing
- Image thumbnail generation (for image uploads)
- RESTful API endpoints

## Project Structure

```
.
├── controllers/      # Route controllers for API endpoints
├── routes/           # Express route definitions
├── utils/            # Utility modules (DB, Redis, helpers)
├── tests/            # Mocha/Chai test suites
├── server.js         # Main server entry point
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
```

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start MongoDB and Redis servers**  
   Make sure you have both MongoDB and Redis running locally.

3. **Start the server:**
   ```sh
   npm run start-server
   ```

4. **Run tests:**
   ```sh
   npm test
   ```

## API Endpoints

- `POST /users` - Create a new user
- `GET /connect` - Login and get auth token
- `GET /disconnect` - Logout
- `GET /users/me` - Get current user info
- `POST /files` - Upload a file or folder
- `GET /files/:id` - Get file/folder info
- `GET /files` - List files/folders
- `PUT /files/:id/publish` - Publish a file
- `PUT /files/:id/unpublish` - Unpublish a file
- `GET /files/:id/data` - Get file content
