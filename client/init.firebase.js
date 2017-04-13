const firebase = require('firebase');
require('angularfire');

const config = {
  apiKey: "AIzaSyC_iIF0NJay7azTXLjmVh0JaOoPSwxD_vE",
  authDomain: "instructorassistant-92dbe.firebaseapp.com",
  databaseURL: "https://instructorassistant-92dbe.firebaseio.com",
  projectId: "instructorassistant-92dbe",
  storageBucket: "instructorassistant-92dbe.appspot.com",
  messagingSenderId: "712876025357"
};

firebase.initializeApp(config);

