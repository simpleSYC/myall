var SIFRA,AKK;
function KOJeOVOJ(a){SIFRA=a.uid;
   let USERdef="ID/"+SIFRA;
                                      
MyallBase.child(USERdef).once("value")
.then(function(snapshot) {
let CekDATA = snapshot.val();

if(CekDATA!=undefined){AKK=CekDATA["AKK"];let W=UserskataData(CekDATA[AKK]); puniLokalno(W);  Turi_ACT_email(CekDATA["email"]);
document.getElementById("user_para").innerHTML = "https://mylinks.sytes.net<br>/" + AKK;}
else{ADDni_novUSER(a);}
});	 
}

function UserskataData(a){let R=a["MYLINKS"];return R;}

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
document.getElementById("user_div").style.display = "contents";
document.getElementById("user_div").style.width = 37+"%";
document.getElementById("login_div").style.display = "none";
 var user = firebase.auth().currentUser;
KOJeOVOJ(user);} 
else {
document.getElementById("user_div").style.display = "none";
document.getElementById("user_div").style.width = 73+"%";
document.getElementById("login_div").style.display = "block";}
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

function logout(){//// vjueto avtomatski gi resetira
firebase.auth().signOut();

document.getElementById("email_field_1").innerHTML="";
document.getElementById("password_field_1").innerHTML="";
document.getElementById("email_field_2").innerHTML="";
document.getElementById("password_field_2").innerHTML="";

document.getElementById("email_field_1").value="";
document.getElementById("password_field_1").value="";
document.getElementById("email_field_2").value="";
document.getElementById("password_field_2").value="";
SUP(false);
}

function SUP(a){if(a){
ErorINFO.display="block";
document.getElementById("Lin").style.display = "none";
document.getElementById("Sup").style.display = "block";}else{
ErorINFO.display="none";
document.getElementById("Lin").style.display = "block";
document.getElementById("Sup").style.display = "none";}}

function SingUP(){
if((Par[0])&&(Par[1])&&(Par[2])){
var email = document.getElementById("email_field_2").value;
var password = document.getElementById("password_field_2").value;

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// ...
}); setTimeout(SND_vrf,3000);

}else{
if(Par[0]!=true){TXTO="heyy dude take other username..";}else
if(Par[1]!=true){TXTO="this email is unvaeble for sign up..";}else
      {TXTO="paswort to short,, dude comone think somthink long";}
ErorINFO.innerHTML=TXTO;}}


function SND_vrf(){var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
// Email sent.


}).catch(function(error) {
// An error happened.
});

}