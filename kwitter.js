function signIn(){
    username = document.getElementById("user_name").value

    localStorage.setItem("User", username)

    window.location = "kwitter_room.html"
}
