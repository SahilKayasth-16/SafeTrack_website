
// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBEUUYzfnjqB4-WybPcCR6Pevh_k7bP4VU",
    authDomain: "safe-track-5d64f.firebaseapp.com",
    databaseURL: "https://safe-track-5d64f-default-rtdb.firebaseio.com",
    projectId: "safe-track-5d64f",
    storageBucket: "safe-track-5d64f.firebasestorage.app",
    messagingSenderId: "549537937946",
    appId: "1:549537937946:web:ad0860361ea0cd43002fa3",
    measurementId: "G-XG51YB91FV"
};

const MAP_API_KEY = "fIVoqc2T9Nh7Y7NIz9r9";

const map = new maptilersdk.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/streets/style.json?key=fIVoqc2T9Nh7Y7NIz9r9', // style URL
    center: [72.818671, 21.181005], // starting position [lng, lat] - Note the lng, lat order for web mapping
    zoom: 12.0 // starting zoom
});

const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid'); // e.g. ?uid=HKgO2l5UWgggAUrp6BgIqPSKg1z

    async function fetchLocation() {
      try {
        const res = await fetch(`http://localhost:5000/api/location/${uid}`);
        const data = await res.json();

        if (!data.location) {
          alert("No location found for this UID.");
          return;
        }

        const lat = data.location.latitude;
        const lng = data.location.longitude;

        // Center the map on the fetched location
        map.setCenter([lng, lat]);

        // Add marker
        new maptilersdk.Marker().setLngLat([lng, lat]).addTo(map);
      } catch (err) {
        console.error('Error fetching location:', err);
        alert('Failed to load location.');
      }
    }

    fetchLocation();

