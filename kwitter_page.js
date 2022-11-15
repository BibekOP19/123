//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCMKE1YbO0BYFCf8oBXfoZ8HajrT9zOTwg",
      authDomain: "test-app-57d2e.firebaseapp.com",
      databaseURL: "https://test-app-57d2e-default-rtdb.firebaseio.com",
      projectId: "test-app-57d2e",
      storageBucket: "test-app-57d2e.appspot.com",
      messagingSenderId: "510043559883",
      appId: "1:510043559883:web:ec557764e45e86ffac484e",
      measurementId: "G-W1XCG5YK4Q"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(messege_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
message_with_tag="<h4 class='messege_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumps-up'>like: "+like+"</span> </button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("kwitter.html");
}
function updateLike(
      message_id
){
  console.log("clicked on like button-"+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}