//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDshETWSFhZaq_I2n_GjpIvvrgM_Tvx32o",
      authDomain: "the-beeeeeter-twitter.firebaseapp.com",
      databaseURL: "https://the-beeeeeter-twitter-default-rtdb.firebaseio.com",
      projectId: "the-beeeeeter-twitter",
      storageBucket: "the-beeeeeter-twitter.appspot.com",
      messagingSenderId: "106980534423",
      appId: "1:106980534423:web:a43cc6294a59ab0d1fe1d2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("User")
room_name = localStorage.getItem("room_name")
function sendd(){
      msg = document.getElementById("shawsheesh").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
            
      })

      document.getElementById("shawsheesh").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      message = message_data["message"]
      like = message_data["likes"]
      name = message_data["name"]

      part1 = "<h2>" + name + "<img class = 'user_tick'src = 'tick.png'><h2>"
      part2 = "<h4 class = 'message_h4'>" + message + "<h4>"
      part3 = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>"
      part4 = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"
      rows = part1 + part2 + part3 + part4
      document.getElementById("output").innerHTML += rows


//End code
      } });  }); }
function updateLike(message_id){
likes = document.getElementById(message_id).value
updateLikes = Number(likes)+1

firebase.database().ref(room_name).child(message_id).update({
      likes : updateLikes
})

}
function logout(){
      localStorage.removeItem("User")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
getData();
