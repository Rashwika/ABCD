var firebaseConfig = {
      apiKey: "AIzaSyAj9zcaeW1kc3RkOIeShw0chbeK5wFR2Ag",
      authDomain: "kwitter-253b7.firebaseapp.com",
      databaseURL: "https://kwitter-253b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-253b7",
      storageBucket: "kwitter-253b7.appspot.com",
      messagingSenderId: "822018157891",
      appId: "1:822018157891:web:5ae594cba9f819a27353f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  main_folder_name = childKey;
                 // console.log(main_folder_name);
                  row = '<div class="room_name" id="'+main_folder_name+'" onclick="redirect(this.id)">'+ main_folder_name+'</div> <hr>';
                  document.getElementById("output").innerHTML+=row;
                  
            });
      });
}
getData();
user_name = localStorage.getItem("user_name_key");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Main folder created"
      });
      localStorage.setItem("room_name_key",room_name);
      window.location="kwitter_page.html";
}
function redirect(room_id){
      localStorage.setItem("room_name_key",room_id);
      //console.log(room_id);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name_key");
      localStorage.removeItem("room_name_key");
      window.location="index.html";
}