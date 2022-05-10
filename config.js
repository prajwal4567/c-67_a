import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBDA422K-STf6oDWsUG6IQLXyYCSbxT1A0",
  authDomain: "c-67-d6e18.firebaseapp.com",
  projectId: "c-67-d6e18",
  storageBucket: "c-67-d6e18.appspot.com",
  messagingSenderId: "946445687489",
  appId: "1:946445687489:web:a72186d95ac014650b1240"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();