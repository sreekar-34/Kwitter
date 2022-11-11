//YOUR FIREBASE LINKS
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
  

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
u_name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4>" + namee +"<img class='user-tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value=" +like+" onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}


function send() {
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
 });
 document.getElementById("msg").value="";

}