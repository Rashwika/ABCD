function add_User(){
    user_name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name_key",user_name);
    window.location = "kwitter_room.html";
}