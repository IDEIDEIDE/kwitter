
//ADD YOUR FIREBASE LINKS HERE
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
    // part 1
    username = localStorage.getItem("User")

    // part 23
 
    function addroom(){
          room_name = document.getElementById("roomname").value

          firebase.database().ref("/").child(room_name).update({
                purpose : "addinguser"
          })
          localStorage.setItem("room_name", room_name)
          window.location = "twitter_page.html"
    }

    document.getElementById("welcomeuser").innerHTML = "Welcome " + username + "!"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToThePage(this.id)'># " + Room_names + "</div>" 
      document.getElementById("output").innerHTML += row

      });});}


function redirectToThePage(name){
      localStorage.setItem("room_name", name)

      window.location = "twitter_page.html"
}
function logout(){
      localStorage.removeItem("User")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
getData();
