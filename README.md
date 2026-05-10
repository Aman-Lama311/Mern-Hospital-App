---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- Git
- MongoDB Atlas account
- Cloudinary account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Aman-Lama311/Mern-Hospital-App.git
cd Mern-Hospital-App
```

**2. Install dependencies for all three folders**

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

**3. Set up environment variables**

Create `.env` files in each folder as shown in the Environment Variables section below.

**4. Run the project**

Open three terminals and run each part separately:

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev

# Terminal 3 - Admin
cd admin
npm run dev
```

The apps will be available at:
- Frontend: `http://localhost:5173`
- Admin: `http://localhost:5174`
- Backend API: `http://localhost:4000`

---

## Environment Variables

### backend/.env

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```

### frontend/.env

```env
VITE_BACKEND_URL=http://localhost:4000
```

### admin/.env

```env
VITE_BACKEND_URL=http://localhost:4000
```

> Never commit .env files to GitHub. They are included in .gitignore.

---

## API Endpoints

### User Routes — /api/user

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| POST | /register | Register new patient | No |
| POST | /login | Patient login | No |
| GET | /get-profile | Get patient profile | Yes |
| POST | /update-profile | Update patient profile | Yes |
| POST | /book-appointment | Book an appointment | Yes |
| GET | /appointments | Get patient appointments | Yes |
| POST | /cancel-appointment | Cancel an appointment | Yes |

### Doctor Routes — /api/doctor

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| GET | /list | Get all doctors | No |

### Admin Routes — /api/admin

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| POST | /login | Admin login | No |
| POST | /add-doctor | Add a new doctor | Admin |
| GET | /all-doctors | Get all doctors | Admin |
| GET | /appointments | Get all appointments | Admin |
| POST | /cancel-appointment | Cancel any appointment | Admin |
| GET | /dashboard | Get dashboard stats | Admin |

---

## Deployment

### Frontend and Admin on Vercel

1. Push your code to GitHub
2. Import your repository on vercel.com
3. Set the root directory to `frontend` or `admin`
4. Set build command to `npm run build`
5. Set output directory to `dist`
6. Add environment variables in Vercel project settings
7. Deploy

### Backend on Render

1. Create a new Web Service on render.com
2. Connect your GitHub repository
3. Set root directory to `backend`
4. Set build command to `npm install`
5. Set start command to `npm start`
6. Add environment variables
7. Deploy

### Keeping the Backend Alive

Render's free tier sleeps after inactivity. Use UptimeRobot to ping your backend URL every 5 minutes to keep it running.

### Database

Create a free cluster on MongoDB Atlas, whitelist all IPs (`0.0.0.0/0`) for Render compatibility, and paste the connection string into your backend `.env` as `MONGODB_URI`.

---

## Author

Aman Lama — [@Aman-Lama311](https://github.com/Aman-Lama311)
