
//ADD YOUR FIREBASE LINKS HERE
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

    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
   
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name..."
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room name- "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}


