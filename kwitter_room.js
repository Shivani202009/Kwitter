var firebaseConfig = {
      apiKey: "AIzaSyDApoNLpbJRKtRl68Yfg9yFiqbmleYT2x4",
      authDomain: "kwitter-47862.firebaseapp.com",
      databaseURL: "https://kwitter-47862-default-rtdb.firebaseio.com",
      projectId: "kwitter-47862",
      storageBucket: "kwitter-47862.appspot.com",
      messagingSenderId: "650213967935",
      appId: "1:650213967935:web:c60497340143f26c44908a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
