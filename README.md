# HivesAway: Food Allergy & Hive Correlation Tracker

HivesAway empowers you to track your food allergies and potential hive triggers, aiding in informed dietary decisions and improved allergy management. Easily record your meals and any resulting hives, generating insights into possible correlations.



https://github.com/user-attachments/assets/0a685a94-6538-4451-9f02-153095d9071a



## User Experience First

HivesAway prioritizes a clean and uncluttered user interface (UI) built with React and Vite for a seamless experience. It's designed with these principles in mind:

- **Clarity and Usability:** Navigating through HivesAway is straightforward.
- **Effortless Login/Logout:** Logging in and out is quick and hassle-free.
- **Clear Warnings:** Unregistered users receive informative warnings before attempting to access protected functionalities.

## Accessible on Any Device

HivesAway is a browser-based application, granting you the flexibility to access it from virtually any device:

- **Cross-Platform Compatibility:** Runs smoothly on desktops, laptops, tablets, and smartphones.
- **Data Portability:** HivesAway stores user data securely outside the browser, enabling you to seamlessly switch between devices.

## Installation & Setup

HivesAway requires the following dependencies:

- **Python 3.11:** Ensure you have Python 3.11 or later installed on your system. You can verify this by running `python3 --version` in your terminal.
   - Additional dependencies are listed in `requirements.txt`. Install them using `pip install -r requirements.txt`.
- **Node.js v20.17.0:** Download and install Node.js v20.17.0 (or a compatible version) from the official Node.js website (https://nodejs.org/).

**Running HivesAway:**

These instructions guide you through running HivesAway:

1. **Frontend Setup:**
   - Open a terminal and navigate to the `Client` directory (assuming your project structure).
   - Run `npm run dev` to start the React development server.
2. **Backend Setup:**
   - Navigate to the `server` directory.
   - Run `python3 main.py` to start the Python backend server.

**Important Note:** Running HivesAway necessitates both the React frontend and Python backend running concurrently.

**Production Builds:**

1. **Frontend Build:**
   - In the `Client` directory, run `npm run build` to create an optimized production build.
2. **IP Address Configuration:**
   - Modify the IP address settings in both the Flask application and the React component named `flaskip.jsx`. These addresses should point to the running backend server.
