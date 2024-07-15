import React from 'react';
import './assets/scss/themes.scss';
import RouteIndex from 'Routes/Index';

//import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
//fakeBackend();

//Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/firebase_helper";

const firebaseConfig = {
  apiKey: "AIzaSyBd5FMHkEpKjwVxS-pQf0pCmjChDFrnD-k",
  authDomain: "control-6943.firebaseapp.com",
  projectId: "control-6943",
  storageBucket: "control-6943.appspot.com",
  messagingSenderId: "1031149777618",
  appId: "1:1031149777618:web:ab1fd11b909bbc5a0bf30b",
  measurementId: "G-T1Z6LERDWS"
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <RouteIndex />
  );
}

export default App;
