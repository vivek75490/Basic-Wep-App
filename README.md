# Basic-Wep-App
# Full-Stack Intern/Volunteer Application Portal

A complete MERN stack application that provides a simple portal for accepting and viewing applications for intern or volunteer positions.

---

## 🚀 Project Overview

This project is a full-featured web application built with the MERN (MongoDB, Express, React, Node.js) stack. It demonstrates a standard client-server architecture and includes three main views:

1.  **Home Page:** A welcoming landing page for potential applicants.
2.  **Registration Form:** A clean and simple form for users to submit their applications.
3.  **Admin View:** A protected view that displays all submitted applications in a clean, sorted list.

---

## 🛠️ Tech Stack

- **Frontend:**
  - **React.js:** A JavaScript library for building user interfaces.
  - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
  - **Axios:** A promise-based HTTP client for making API requests to the backend.

- **Backend:**
  - **Node.js:** A JavaScript runtime environment.
  - **Express.js:** A minimal and flexible Node.js web application framework.
  - **MongoDB:** A NoSQL database for storing application data.
  - **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
  - **CORS:** A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  - **Dotenv:** A zero-dependency module that loads environment variables from a `.env` file.

---

## ✨ Features

- **Full CRUD Functionality:** Create and Read operations for applicant data.
- **RESTful API:** A well-structured backend API for handling client requests.
- **Responsive Design:** A mobile-first interface that looks great on all screen sizes.
- **Component-Based Architecture:** A clean and maintainable frontend built with reusable React components.
- **Environment Variable Management:** Secure handling of sensitive information like database connection strings.

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following software installed on your computer:

- [Node.js](https://nodejs.org/en/download/) (which includes npm)
- [Git](https://git-scm.com/downloads)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account for the database.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Set up the Backend:**
    ```sh
    # Navigate to the server directory
    cd server

    # Install server dependencies
    npm install

    # Create a .env file in the /server directory
    # and add your MongoDB connection string
    ATLAS_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
    PORT=5000
    ```

3.  **Set up the Frontend:**
    ```sh
    # Navigate to the client directory from the root folder
    cd ../client

    # Install client dependencies
    npm install
    ```

---

## 🏃 Available Scripts

To run the application, you will need to open two separate terminals: one for the backend server and one for the frontend client.

### Run the Backend Server

```sh
# From the /server directory
npm run dev

The server will start on http://localhost:5000.

Run the Frontend Client
# From the /client directory
npm start

The React application will start on http://localhost:3000 and open automatically in your browser.

📂 Folder Structure
The project maintains a monorepo structure with two main directories:

/
├── client/         # Contains the entire React frontend application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
│
└── server/         # Contains the entire Node.js/Express backend
    ├── models/
    ├── routes/
    ├── .env
    └── server.js

</markdown>
