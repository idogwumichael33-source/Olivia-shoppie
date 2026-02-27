// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your config
const firebaseConfig = {
  apiKey: "PASTE",
  authDomain: "PASTE",
  projectId: "PASTE",
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


