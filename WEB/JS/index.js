$(document).ready(function(){
document.getElementById("NVG").style="display:none;";
document.getElementsByClassName("containerX")[0].style="opacity:1;";
});

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBNjmQnhNhtKS3Fl-S01bPLapvqtjFN7kE",
    authDomain: "myall-proekt.firebaseapp.com",
    databaseURL: "https://myall-proekt.firebaseio.com",
    projectId: "myall-proekt",
    storageBucket: "myall-proekt.appspot.com",
    messagingSenderId: "53126128195",
    appId: "1:53126128195:web:c5605a60494f511b8b6af6",
    measurementId: "G-2YRGN7EEZN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  

var MyallBase = firebase.database().ref();

var USERdef;
var mailID;
var CC,DD;
function KOJeOVOJ(a){
	
	
			
		mailID=a.slice(0,a.length-4);
		
		USERdef="REG@/"+mailID;
		
MyallBase.child(USERdef);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["REG@"][mailID];
 
 
 
	if(DD!=undefined){
		console.log("ovaj postoi  user ",mailID);DD=true;}else{
		console.log("ovaj user  go nema",mailID);DD=false;}
		
	
  });	
  
  
  
}


		

firebase.auth().onAuthStateChanged(function(user) {
	
KOJeOVOJ(user.email);

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;


    if(user != null){

      var email_id = user.email;
	  
	  document.getElementById("NVG").style="display:block;";
	   
	   
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
	  
	  

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field_1").value;
  var userPass = document.getElementById("password_field_1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  
	    document.getElementById("NVG").style="display:none;";
}



function SUP(a){
if(a){
	document.getElementById("Lin").style.display = "none";
    document.getElementById("Sup").style.display = "block";}else{
	document.getElementById("Lin").style.display = "block";
    document.getElementById("Sup").style.display = "none";}

}

function SingUP(){
  var email = document.getElementById("email_field_2").value;
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}




function Aktiv(a){ b=a.children[0];
if(b.checked==true){
document.getElementById("STatusTxT").innerHTML="Akctiv";
document.getElementById("STatusTxT").style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
document.getElementById("STatusTxT").style="color:red;";
document.getElementById("STatusTxT").innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

}

function Imenik (a){
b="https://myall.sytes.net/";
if(a.value.length>0){d="";}else{d="1kinger";}	
document.getElementById("TitLINK").innerHTML=b+d+a.value;}


