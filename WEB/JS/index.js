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
///  firebase.analytics();
  

var MyallBase = firebase.database().ref();

var LERo={"Activity":{"L0":"","L1":"","L2":"","L3":"","L4":"","L5":""},"Contact":{"L0":"","L1":"","L2":"","L3":""},"PROFIL":{"FOTO":"","IME":"","RANK":"","REG":{"ID":"","email":"","veri":false},"SETINGS":{"S0":"","S1":""}},"Peyment":{"L0":"","L1":"","L2":"","L3":""},"Social":{"L0":"pop","L1":"","L2":"","L3":""}}


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
		console.log("ovaj postoi  user ",mailID);
		      document.getElementById("user_para").innerHTML = "https://myall.sytes.net<br>/" + DD;

		}else{
		console.log("ovaj user  go nema",mailID);}
		
	
  });	
  
  
  
}


		

firebase.auth().onAuthStateChanged(function(user) {
	

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("user_div").style.width = 37+"%";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

KOJeOVOJ(user.email);	// go pozdravuva akkauntot	  

    if(user != null){

      var email_id = user.email;
  
	  document.getElementById("NVG").style="display:block;";
	   
 
	  
	  

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("user_div").style.width = 73+"%";
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
  
document.getElementById("email_field_1").innerHTML="";
document.getElementById("password_field_1").innerHTML="";
document.getElementById("email_field_2").innerHTML="";
document.getElementById("password_field_2").innerHTML="";
  SUP(false);
  
	    document.getElementById("NVG").style="display:none;";
}



function SUP(a){
if(a){
	document.getElementById("Lin").style.display = "none";
    document.getElementById("Sup").style.display = "block";}else{
	document.getElementById("Lin").style.display = "block";
    document.getElementById("Sup").style.display = "none";}

}
var eMAIL;
function SingUP(){
  var email = document.getElementById("email_field_2").value;   eMAIL=email.slice(0,email.length-4);
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
firebase.database().ref().child("REG@").child(eMAIL).set(USerko);
firebase.database().ref().child("URLuser").child(USerko).set(LERo);

firebase.database().ref().child("URLuser").child(USerko).child("PROFIL").child("REG").child("email").set(email);

}




function Aktiv(a,n){ b=a.children[0];
if(n==0){ELEmentce=document.getElementById("STatusTxT");}
if(n==1){ELEmentce=document.getElementById("STATS_linkce");}

if(b.checked){
ELEmentce.innerHTML="Akctiv";
ELEmentce.style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
ELEmentce.style="color:red;";
ELEmentce.innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

if(n==0){if(b.checked){GLAVEN_SW=true;}else{GLAVEN_SW=false;}}
if(n==1){if(b.checked){STATS_linkce=true;}else{STATS_linkce=false;}}

}





var USerko;
function Imenik (a){
b="https://myall.sytes.net/";
if(a.value.length>0){d="";}else{d="1kinger";}	
document.getElementById("TitLINK").innerHTML=b+d+a.value;
USerko=a.value;
}

//////////////////// modalo

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=  document.getElementById("Lopci");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	
LOPCI.style="display: none;";
  
  }

  
}


////////////////////////// modelskoto kopce
function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}
}
var R_0="";var STATS_linkce,R_1,R_2,StalazINDEX;
var R=[STATS_linkce,R_1,R_2,StalazINDEX];
/// PAR i par se parametri od setinzi zimanje

function PAR(b){a=b.classList.value;
if(a.includes("faq-button")){R_1="Activity";}else  //  Activity
if(a.includes("home-button")){R_1="Social";}else //Social
if(a.includes("more-button")){R_1="Peyment";}else // Peyment
if(a.includes("settings-button")){R_1="Contact";}} //Contact

function MDL(a,b) {R_2="L"+b;                         /// be e id na stalaza
  modal.style.display = "block";
  document.getElementById("tsto").innerHTML="vie stistnavte na "+a.classList.value;
}

function par(a){StalazINDEX="malee -"+a;}

//MESTENJE();

function UPDATElinko(){}


function MESTENJE(a){
if(a==1){
	

firebase.database().ref().child("URLuser").child("1kinger").child("Activity").child("L3").set(false,"GG dwaa");
}

}


////////////////////////// citanje data
var da=true;
GETaccSTATUS(da);
function GETaccSTATUS(da){SW=document.getElementsByClassName("switch")[0].children[0];	
	if(da!=SW.checked ){SW.click();}
}



