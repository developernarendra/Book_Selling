# Full Stack Course App (Backend + Frontend)

A complete web application for course management. Built with **Node.js**, **Express**, **MongoDB**, and **React**, this app allows users to sign up, log in, view courses, purchase them, and manage their purchased content.

---

## 🚀 Features

### Backend
- User registration and authentication (JWT)
- Protected routes
- MongoDB database with Mongoose models
- Course listing and purchase functionality
- User’s purchased courses view

### Frontend
- User Signup/Login
- List all courses
- Purchase a course
- View purchased courses
- Auth-protected views
- Responsive CSS design

---

## 🧩 Tech Stack

**Backend:** Node.js, Express.js, MongoDB, JWT, bcryptjs  
**Frontend:** React, React Router, Axios, Vanilla CSS  

---

## 📁 Folder Structure

```
fullstack-course-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   ├── index.js
    │   └── styles.css
    ├── .env
    └── package.json
```

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd fullstack-course-app
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/courses_app
JWT_SECRET=your_jwt_secret_here
```
Start the server:
```bash
node server.js
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```
Create `.env` file:
```
REACT_APP_API=http://localhost:5000
```
Start React app:
```bash
npm start
```

---

## API Endpoints

### Users
- `POST /api/users/signup`
- `POST /api/users/login`
- `GET /api/users/purchased` _(protected)_

### Courses
- `GET /api/courses`
- `POST /api/courses/purchase/:id` _(protected)_

---

## 🧪 Built With

- Node.js + Express
- MongoDB + Mongoose
- React + React Router
- JWT Auth + Axios
- Custom CSS

---

## 🙋‍♂️ Author
**Narendra Parora**  
[LinkedIn](https://www.linkedin.com/in/narendra-parora-4533b81a6/) | [GitHub](https://github.com/developernarendra)

---

## 📄 License
This project is licensed under the MIT License.
