//YOUR FIREBASE LINKS//
var firebaseConfig = {
      apiKey: "AIzaSyAj9zcaeW1kc3RkOIeShw0chbeK5wFR2Ag",
      authDomain: "kwitter-253b7.firebaseapp.com",
      databaseURL: "https://kwitter-253b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-253b7",
      storageBucket: "kwitter-253b7.appspot.com",
      messagingSenderId: "822018157891",
      appId: "1:822018157891:web:5ae594cba9f819a27353f6"
};
// Initialize Firebase//
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name_key");
room_name = localStorage.getItem("room_name_key");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        subfolder_name = childKey;
                        subfolder_data = childData;
                        db_name = subfolder_data['name'];
                        db_message = subfolder_data['message'];
                        db_like = subfolder_data['like'];
                        name_tag = '<h4>' + db_name + '<img src="tick.png" class="user_tick"> </h4>';
                        message_tag = '<h4 class="message_h4">' + db_message + '</h4>';
                        button_start_tag = '<button id= "' + subfolder_name + '" value= "' + db_like + '" onclick="update_like(this.id)">';
                        button_text_tag = '<span class = "glyphicon glyphicon-thumbs-up"> like: ' + db_like + '</span> </button> <hr>';

                        row = name_tag + message_tag + button_start_tag + button_text_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function update_like(button_id){
      console.log(button_id);
      likes = document.getElementById(button_id).value;
      likes = Number(likes)+1;
      firebase.database().ref(room_name).child(button_id).update({
            like: likes
      });
      console.log(likes);
}