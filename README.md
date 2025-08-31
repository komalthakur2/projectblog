# 📝 Intelligent Blogging Hub

A **MERN stack blogging platform** with admin authentication, blog publishing, comments, and AI-powered content generation.

## 🌍 Live Demo
🔗 [ProjectBlog - Live](https://projectblog-nine.vercel.app/)

---

## ⚡ Features
- 🔐 Admin authentication (login/logout)
- 📝 Create, edit, and delete blogs
- 🌍 Public blogs listing
- 💬 Comment system
- 🔑 Secure API with JWT
- 📱 Fully responsive UI
- 🚀 Deployed on **Vercel**

---

## 🛠 Tech Stack
- **Frontend:** React, Context API, Axios, TailwindCSS  
- **Backend:** Node.js, Express.js, MongoDB, JWT  
- **Deployment:** Vercel  

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/komalthakur2/projectblog.git
cd projectblog
2️⃣ Install dependencies
bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
3️⃣ Add Environment Variables
Create a .env file inside the server folder and add:

env
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
For the client, create a .env file inside client/:

env
Copy code
VITE_BASE_URL=http://localhost:5000
4️⃣ Run the project
bash
Copy code
# Start backend (from server folder)
npm start

# Start frontend (from client folder)
npm run dev
🔑 Admin Login
Login page: Admin Login
(Optional: Add demo credentials here if you want others to test it)

📸 Screenshots
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/443d5ad8-3211-411c-ae97-bb89a9b730b6" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b5e4d0dc-d724-4927-93c6-f5209dc90dc5" />



markdown
Copy code
![Login Page]([link-to-login-screenshot](https://projectblog-nine.vercel.app/login))
![Homepage]([link-to-homepage-screenshot](https://projectblog-nine.vercel.app/))
🏗 Deployment
The project is deployed on Vercel.
Frontend + Backend are both hosted and accessible through the live demo link.

👩‍💻 Author
Komal Kumari Thakur
🔗 GitHub
