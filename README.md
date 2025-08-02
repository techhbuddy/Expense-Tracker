# Expense Tracker (Firebase + React)

*Expense Tracker* web app, built with *React.js* and *Firebase*, lets you sign in with Google, add or delete transactions, and track your expenses in real-time with Firestore. Keep your money game on point!

---

## 🚀 Features

- 🔥 *Google Authentication* using Firebase.
- 📊 *Real-time expense tracking* with Firestore.
- ➕ Add and ❌ Delete transactions.
- 🎨 Modern and responsive UI with animations.
- ☁ Data stored securely in Firebase Firestore.

---

## 🛠 Tech Stack

- *Frontend:* React.js, CSS (Tailwind/Custom)
- *Backend:* Firebase Authentication & Firestore
- *Authentication:* Google Sign-In
- *Database:* Firebase Firestore (NoSQL)

---

## 📂 Project Structure


src/
├── components/       # Reusable UI components
├── pages/           # Login and Dashboard pages
├── context/         # Firebase and Auth context providers
├── visitors/        # Placeholder images/assets
├── App.js           # Main App entry
└── index.js         # React DOM entry point


---

## 🔧 Installation & Setup

1. *Clone the repository*
   bash
   git clone https://github.com/<your-username>/<repo-name>.git
   

2. *Navigate to the project folder*
   bash
   cd expense-tracker
   

3. *Install Dependencies*
   bash
   npm install
   

4. *Set up Firebase*
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable Google Authentication:
     - Go to *Authentication* > *Sign-in method* > Enable *Google*.
   - Enable Firestore Database:
     - Go to *Firestore Database* > *Create database* > Start in *test mode*.
   - Get your Firebase config keys from *Project Settings* > *General* > *Your Apps*.

5. *Create .env file*
   In the root of your project, create a .env file and add your Firebase credentials:
   env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   

6. *Start the app*
   bash
   yarn start
   # OR
   npm start
   
   Your app will now run at http://localhost:3000/.
