
# 🏗️ GotoInc Test Task

Welcome to the GotoInc Test Task project! This repository contains a React application built as part of the test task for GotoInc, showcasing skills in frontend development using React, Zustand, TypeScript, Tailwind CSS, and other modern web technologies.

## 🚀 Project Overview

This application allows users to manage and track parcel deliveries. It provides forms for creating new delivery requests and orders, featuring a simple and intuitive interface with data management handled via Zustand for global state management.

### ✨ Features
- **Parcel Delivery Forms**: Submit details like origin, destination, and dispatch date.
- **State Management**: Leveraging Zustand for handling global state.
- **Routing**: Page navigation with `react-router-dom`.
- **Form Validation**: Ensuring that all required fields are properly filled.
- **CSS Modules & Tailwind**: For a clean, responsive UI.

## 🛠️ Technologies Used

- **React**: For building user interfaces.
- **TypeScript**: For static type checking and robust code.
- **Zustand**: A minimal state-management solution.
- **React Router DOM**: For routing between pages.
- **Tailwind CSS**: For styling the application with ease.
- **Jest**: For unit testing React components.
- **SCSS Modules**: To scope CSS to individual components and keep styles modular.

## 📂 Project Structure

```bash
.
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable components
│   ├── pages/                  # Application pages
│   ├── stores/                 # Zustand state stores
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main App component
│   ├── index.tsx               # Application entry point
│   └── styles/                 # Global and component-specific styles
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## ⚙️ Installation and Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yaroslav-tsarenko/gotoinc-test-task.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd gotoinc-test-task
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## 🧪 Running Tests

The project includes unit tests using Jest and React Testing Library. To run the tests, use the following command:

```bash
npm test
```

### 🙌 Acknowledgements

Thanks to GotoInc for the opportunity to work on this project!

