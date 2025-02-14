# Nepali Travel App  
🏔️ **Nepali Travel Destinations** 🌍  
A web application showcasing travel destinations in Nepal  

---

## 🚀 Features  
✅ View Travel Destinations with images and descriptions  
✅ Admin Panel with authentication (CRUD operations for destinations)  
✅ Dark Mode & Smooth Animations  
✅ Interactive UI with Bootstrap  

---

## 🛠️ Tech Stack  
- **Frontend**: React.js, React Router, Bootstrap, Axios  
- **Backend**: Node.js, Express.js, MySQL, JWT Authentication  
- **Deployment**: Docker, Docker Compose  

---

## 🎯 Installation & Setup  

### 1️⃣ Clone the Repository  

git clone https://github.com/Priyanka-Thapa/nepali-travel-app  
cd nepali-travel-app  


### 2️⃣ Setup Backend
cd backend
npm install


### 3️⃣ Setup Frontend
cd frontend
npm install

### 🐳 Docker Setup
To run using Docker & Docker Compose, execute:
docker-compose up --build

Method	Endpoint	Description
GET	/api/destinations	Get all destinations
POST	/api/destinations	Add a new destination
PUT	/api/destinations/:id	Update a destination
DELETE	/api/destinations/:id	Delete a destination
