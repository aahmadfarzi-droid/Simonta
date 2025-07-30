// firebase-config.js

// Konfigurasi Firebase proyek Anda.
// Objek ini akan digunakan oleh library Firebase yang dimuat di file HTML.
const firebaseConfig = {
  apiKey: "AIzaSyD9vzTunp4P3qZynga-6kWf5ChjnBcgInU",
  authDomain: "sistem-monitoring-esp32-1f8a3.firebaseapp.com",
  databaseURL:
    "https://sistem-monitoring-esp32-1f8a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sistem-monitoring-esp32-1f8a3",
  storageBucket: "sistem-monitoring-esp32-1f8a3.appspot.com",
  messagingSenderId: "389502240374",
  appId: "1:389502240374:web:369c54e175ce48459c8157",
  measurementId: "G-1LK2BRC4PG",
};

// Inisialisasi Firebase menggunakan syntax global (compat)
// Objek 'firebase' didapatkan dari script yang dimuat di HTML
firebase.initializeApp(firebaseConfig);
