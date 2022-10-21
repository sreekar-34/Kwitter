
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDn6JO8Q-LQOxGIjJWYiB6aYkAnITjRxz0",
      authDomain: "kwitter-2ca9d.firebaseapp.com",
      databaseURL: "https://kwitter-2ca9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ca9d",
      storageBucket: "kwitter-2ca9d.appspot.com",
      messagingSenderId: "304717066587",
      appId: "1:304717066587:web:90af90daa74b650eb4aa7e",
      measurementId: "G-VWNEFF06DH"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


  function add_room(){
   room_name=document.getElementById("room_name").value;
   localStorage.setItem("room_name", room_name);
   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
   });
   window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
         localStorage.setItem("room_name", name);
         window.location="kwitter_page.html";
}