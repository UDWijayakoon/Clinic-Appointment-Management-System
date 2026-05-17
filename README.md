# 🏥 Clinic Appointment Management System (CAMS)

A modern, full-stack clinical scheduling and management application built using the **MERN (MongoDB, Express, React, Node.js)** architecture. This system provides specialized portals and interfaces for **Patients**, **Doctors**, and **Clinic Administrators** to streamline scheduling, patient records management, and day-to-day clinical operations.

---

## 📋 Table of Contents
- [Problem Description](#-problem-description)
- [Proposed Solution](#-proposed-solution)
- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [API Endpoints (with examples)](#-api-endpoints-with-examples)
- [Setup Instructions](#-setup-instructions)
- [How to Run the Project](#-how-to-run-the-project)
- [Developer Tools & Migration Utilities](#-developer-tools--migration-utilities)
- [Troubleshooting](#-troubleshooting)

---

## 🔍 Problem Description

Traditional clinical scheduling systems are plagued by manual overhead, fragmented records, and poor patient engagement. Core challenges include:
- **Patients' Friction**: Scheduling appointment times over the phone or in-person often results in scheduling conflicts, long wait lists, and difficulty checking the status of appointments.
- **Doctors' Overload**: Medical practitioners lack a direct, real-time interface to view their schedules, manage daily queues, or mark their current clinical availability.
- **Administrative Delays**: Clinic staff waste significant administrative effort coordinating with paper logs or disconnected spreadsheets, leading to double bookings, missing medical records, and lost patient details.

---

## 💡 Proposed Solution

The **Clinic Appointment Management System (CAMS)** is a digital-first web application designed to centralize and automate clinical appointments:
- **Patient Empowerment**: A secure self-service portal where patients can view real-time doctor availability, submit booking requests instantly, and update their profile details.
- **Clinical Schedules for Doctors**: A specialized dashboard that allows doctors to check their patient queues and toggle their availability status dynamically.
- **Admin Control Center**: A dedicated system administration interface enabling clinic managers to perform full CRUD operations on doctor records, patient registries, and global clinical appointment schedules.
- **Secure Architecture**: Utilizing JSON Web Tokens (JWT) for authentication and role-based route protection across the React frontend and Express API.

---

## ✨ Key Features

### 👤 Patient Portal
- **User Signup & Authentication**: Secure registration and credential validation.
- **Self-Service Appointment Booking**: Instantly request appointments with specialized, active doctors.
- **Personal Dashboard**: View all past and upcoming appointment requests with status indicators (`Pending`, `Completed`, `Cancelled`).
- **Profile Management**: Update critical profile details (Age, Gender, Contact Phone).

### 🩺 Doctor Portal
- **Live Schedule View**: Check all assigned clinic appointments.
- **Availability Toggles**: Toggle active/inactive status to control scheduling eligibility.
- **Profile Customization**: Maintain specialization records and direct contact information.

### 👑 Admin / Clinic Staff Dashboard
- **Patient Directory (CRUD)**: Create, view, update, and remove patient profiles.
- **Doctor Registry (CRUD)**: Add, edit, and offboard medical staff.
- **Master Appointment Management**: Full control over all system appointments with status update actions.
- **Role-Based Routing**: Restricts administrative pages exclusively to authorized accounts.

---

## 🛠 Technologies Used

### Frontend Architecture
- **React.js 19**: Responsive component-based user interface.
- **React Router Dom 7**: Dynamic client-side routing, protected dashboards, and redirect flows.
- **Vite 8**: Ultra-fast build tool and lightning-quick development server.
- **Vanilla CSS**: Clean, elegant styling using modern CSS variables, glassmorphic styles, interactive hover animations, and high responsiveness.

### Backend Infrastructure
- **Node.js & Express.js 5**: Robust, asynchronous RESTful API framework.
- **Mongoose 9 & MongoDB**: Object-document mapper and flexible NoSQL database storing structured clinical records.
- **Bcrypt.js 3**: High-entropy cryptographic hashing for user password protection.
- **JSON Web Token (JWT)**: Secure, stateless token-based authorization.
- **Dotenv**: Centralized, secure environment variable configuration.
- **Cors**: Configured Cross-Origin Resource Sharing policy for stable frontend-backend connectivity.

---

## 🚀 API Endpoints (with examples)

The backend exposes a highly structured REST API operating at `http://localhost:5000`.

### 🔑 Authentication (`/api/auth`)

#### 1. Register a New User
*   **Method**: `POST`
*   **Path**: `/api/auth/register`
*   **Payload Example**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "password": "securepassword123",
      "role": "patient"
    }
    ```
*   **Success Response** (`201 Created`):
    ```json
    {
      "message": "User Registered"
    }
    ```

#### 2. Authenticate User & Get Token
*   **Method**: `POST`
*   **Path**: `/api/auth/login`
*   **Payload Example**:
    ```json
    {
      "email": "jane@example.com",
      "password": "securepassword123"
    }
    ```
*   **Success Response** (`200 OK`):
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "6451a3d90f23b246a482b412",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "role": "patient"
      }
    }
    ```

---

### 👤 Patient Management (`/api/patients`)
> [!NOTE]
> All patient endpoints require authentication. Include `Authorization: Bearer <your_jwt_token>` in the HTTP headers.

#### 1. Create Patient Profile
*   **Method**: `POST`
*   **Path**: `/api/patients`
*   **Payload Example**:
    ```json
    {
      "name": "Jane Doe",
      "age": 30,
      "gender": "Female",
      "phone": "+1234567890"
    }
    ```
*   **Success Response** (`201 Created`):
    ```json
    {
      "_id": "6451a44e0f23b246a482b419",
      "name": "Jane Doe",
      "age": 30,
      "gender": "Female",
      "phone": "+1234567890",
      "__v": 0
    }
    ```

#### 2. Get All Patients
*   **Method**: `GET`
*   **Path**: `/api/patients`
*   **Success Response** (`200 OK`):
    ```json
    [
      {
        "_id": "6451a44e0f23b246a482b419",
        "name": "Jane Doe",
        "age": 30,
        "gender": "Female",
        "phone": "+1234567890"
      }
    ]
    ```

#### 3. Update Patient Details
*   **Method**: `PUT`
*   **Path**: `/api/patients/:id`
*   **Payload Example**:
    ```json
    {
      "age": 31,
      "phone": "+1999999999"
    }
    ```
*   **Success Response** (`200 OK`):
    ```json
    {
      "_id": "6451a44e0f23b246a482b419",
      "name": "Jane Doe",
      "age": 31,
      "gender": "Female",
      "phone": "+1999999999"
    }
    ```

#### 4. Delete Patient Profile
*   **Method**: `DELETE`
*   **Path**: `/api/patients/:id`
*   **Access Rules**: Admin Access Only (`req.user.role === "admin"`)
*   **Success Response** (`200 OK`):
    ```json
    {
      "message": "Patient Deleted"
    }
    ```

---

### 🩺 Doctor Management (`/api/doctors`)
> [!NOTE]
> All doctor endpoints require authentication. Include `Authorization: Bearer <your_jwt_token>` in the HTTP headers.

#### 1. Create Doctor Profile
*   **Method**: `POST`
*   **Path**: `/api/doctors`
*   **Payload Example**:
    ```json
    {
      "name": "Dr. John Smith",
      "specialization": "Cardiologist",
      "phone": "+1888888888",
      "available": true
    }
    ```
*   **Success Response** (`201 Created`):
    ```json
    {
      "_id": "6451a5a00f23b246a482b425",
      "name": "Dr. John Smith",
      "specialization": "Cardiologist",
      "phone": "+1888888888",
      "available": true,
      "__v": 0
    }
    ```

#### 2. Get All Doctors
*   **Method**: `GET`
*   **Path**: `/api/doctors`
*   **Success Response** (`200 OK`):
    ```json
    [
      {
        "_id": "6451a5a00f23b246a482b425",
        "name": "Dr. John Smith",
        "specialization": "Cardiologist",
        "phone": "+1888888888",
        "available": true
      }
    ]
    ```

#### 3. Update Doctor details
*   **Method**: `PUT`
*   **Path**: `/api/doctors/:id`
*   **Payload Example**:
    ```json
    {
      "available": false
    }
    ```
*   **Success Response** (`200 OK`):
    ```json
    {
      "_id": "6451a5a00f23b246a482b425",
      "name": "Dr. John Smith",
      "specialization": "Cardiologist",
      "phone": "+1888888888",
      "available": false
    }
    ```

#### 4. Delete Doctor Profile
*   **Method**: `DELETE`
*   **Path**: `/api/doctors/:id`
*   **Access Rules**: Admin Access Only (`req.user.role === "admin"`)
*   **Success Response** (`200 OK`):
    ```json
    {
      "message": "Doctor Deleted"
    }
    ```

---

### 📅 Appointment Management (`/api/appointments`)
> [!NOTE]
> All appointment endpoints require authentication. Include `Authorization: Bearer <your_jwt_token>` in the HTTP headers.

#### 1. Book an Appointment
*   **Method**: `POST`
*   **Path**: `/api/appointments`
*   **Payload Example**:
    ```json
    {
      "patient": "6451a44e0f23b246a482b419",
      "doctor": "6451a5a00f23b246a482b425",
      "appointmentDate": "2026-06-15T10:00:00.000Z"
    }
    ```
*   **Success Response** (`201 Created`):
    ```json
    {
      "_id": "6451a6fb0f23b246a482b43a",
      "patient": "6451a44e0f23b246a482b419",
      "doctor": "6451a5a00f23b246a482b425",
      "appointmentDate": "2026-06-15T10:00:00.000Z",
      "status": "Pending",
      "__v": 0
    }
    ```

#### 2. Get All Appointments (Populated)
*   **Method**: `GET`
*   **Path**: `/api/appointments`
*   **Success Response** (`200 OK` - showing referenced documents auto-populated):
    ```json
    [
      {
        "_id": "6451a6fb0f23b246a482b43a",
        "patient": {
          "_id": "6451a44e0f23b246a482b419",
          "name": "Jane Doe",
          "age": 31,
          "gender": "Female",
          "phone": "+1999999999"
        },
        "doctor": {
          "_id": "6451a5a00f23b246a482b425",
          "name": "Dr. John Smith",
          "specialization": "Cardiologist",
          "phone": "+1888888888",
          "available": false
        },
        "appointmentDate": "2026-06-15T10:00:00.000Z",
        "status": "Pending"
      }
    ]
    ```

#### 3. Update Appointment Status / Date
*   **Method**: `PUT`
*   **Path**: `/api/appointments/:id`
*   **Payload Example**:
    ```json
    {
      "status": "Completed"
    }
    ```
*   **Success Response** (`200 OK`):
    ```json
    {
      "_id": "6451a6fb0f23b246a482b43a",
      "patient": "6451a44e0f23b246a482b419",
      "doctor": "6451a5a00f23b246a482b425",
      "appointmentDate": "2026-06-15T10:00:00.000Z",
      "status": "Completed"
    }
    ```

#### 4. Delete or Cancel Appointment
*   **Method**: `DELETE`
*   **Path**: `/api/appointments/:id`
*   **Success Response** (`200 OK`):
    ```json
    {
      "message": "Appointment Deleted"
    }
    ```

---

## ⚙️ Setup Instructions

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v16.0.0 or higher recommended)
- **npm** (comes bundled with Node.js)
- **MongoDB** (Local Community Server running on `127.0.0.1:27017` or a MongoDB Atlas URI)

---

### Step 1: Clone and Navigate
Clone this repository to your local workspace, or navigate into your current folder:
```bash
cd ClinicAppointmentSystem
```

### Step 2: Configure the Backend API
1. Navigate into the API directory:
   ```bash
   cd ClinicAppointmentAPI
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (or verify the existing one is configured):
   ```env
   PORT=5000
   MONGO_URL=mongodb://127.0.0.1:27017/clinicDB
   JWT_SECRET=mysecretkey
   ```

### Step 3: Configure the Frontend Web App
1. Navigate into the frontend React app directory:
   ```bash
   cd ../frontend-react
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```

---

## 🏃 How to Run the Project

### ⚡ Option A: Quick One-Click Launch (Windows)
We have provided an automated launcher file in the root workspace folder:
1. Double-click the **`run_system.bat`** file located in the `ClinicAppointmentSystem` folder.
2. Two command prompt windows will launch:
   - **Backend Server**: Starts the Node.js/Express server on `http://localhost:5000`.
   - **Frontend Server**: Launches the Vite development server on `http://localhost:5173`.
3. Open your browser and navigate to `http://localhost:5173`.
4. Keep the command prompt windows open during use. Closing them will stop the application.

---

### 💻 Option B: Manual Startup (Command Line)
If you prefer running commands manually, open two terminal windows:

#### Terminal 1: Launch Backend
```bash
cd ClinicAppointmentSystem/ClinicAppointmentAPI
npm start
```
*Expected console output:*
`MongoDB Connected`  
`Server running on port 5000`

#### Terminal 2: Launch Frontend
```bash
cd ClinicAppointmentSystem/frontend-react
npm run dev
```
*Expected console output:*
`  VITE v8.0.12  ready in X ms`  
`  ➜  Local:   http://localhost:5173/`

Open `http://localhost:5173/` in your favorite web browser.

---

### 🔑 Demo Login Credentials
For immediate evaluation, you can use these preset user accounts:
- **Patient Account**:
  - **Email**: `nethuli@gmail.com`
  - **Role**: Patient
- **Staff / Admin Account**:
  - Check your registered accounts or register a new user at `http://localhost:5173/register` and select the appropriate administrative role.

---

## 🛠 Developer Tools & Migration Utilities

We have included scripts that parse legacy static HTML prototypes into standard, modern React components:
- **`convert.js` / `convert.py`**: Reads legacy HTML layout structures from a `/frontend` directory, translates HTML classes to React's `className`, normalizes input/image tag closures, parses inline styles into structured JSX objects, and exports structured, modular React JSX pages directly into `/frontend-react/src/pages/`.

---

## 🛡 Troubleshooting

### ❌ "Failed to fetch" error upon signing in
This means the React frontend cannot establish a connection with the Express backend.
1. Check if the backend terminal window is open and showing "Server running on port 5000".
2. If closed, re-run `run_system.bat` or run `npm start` in the `ClinicAppointmentAPI` folder.
3. Ensure your MongoDB service is active.

### ❌ "Port 5173 is in use" error
Vite will default to a different port (e.g. `5174`) if `5173` is already occupied.
1. Close all active terminal processes and rerun `run_system.bat`.
2. To check what's blocking port `5173` on Windows, run `netstat -ano | findstr 5173` and kill the active process.
