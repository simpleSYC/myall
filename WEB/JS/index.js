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
  


var IME=document.getElementById("demo22");

var MyallBase = firebase.database().ref();

var USerko;
var p0=false;var p1=false;var p2=false;
var Parametar=[p0,p1,p2];

function Imenik (a){
b="https://myall.sytes.net/";
if(a.value.length>0){d="";}else{d="1kinger";}	
document.getElementById("TitLINK").innerHTML=b+d+a.value;
USerko=a.value;
if(a.value.length<4){
document.getElementById("ErorTXT").innerHTML="Username must be longer than 3 charakters";}else{
CEK_singupUSERNAME(USerko);}}

function CKMail(a){
if(a.value.length>4){A=a.value.slice(0,a.value.length-4);
if(OKname(A)){snd2ckM(A);}else{document.getElementById("ErorTXT").innerHTML="Unsuported email type ";}}}

function CEK_singupUSERNAME(a){
if(OKname(a)){
document.getElementById("ErorTXT").innerHTML="";
snd2ckU(a);
}else{document.getElementById("ErorTXT").innerHTML="los karakter";}}

function CEp(a){A=a.value;pasot(A);}


function usrFRE(a){if(a){document.getElementById("ErorTXT").innerHTML="";Parametar[0]=true;}else{document.getElementById("ErorTXT").innerHTML="this username is alredy taken";Parametar[0]=false;}}
function mailFRE(a){if(a){document.getElementById("ErorTXT").innerHTML="";Parametar[1]=true;}else{document.getElementById("ErorTXT").innerHTML="this email is alredy used ";Parametar[1]=false;}}
function pasot(a){if(a.length>7){document.getElementById("ErorTXT").innerHTML="";Parametar[2]=true;}else{document.getElementById("ErorTXT").innerHTML="pasword must be over 8 charakters";Parametar[2]=false;}}

function snd2ckU(a){
MyallBase.child("URLuser").child(a).once("value").then(function(snapshot) {BAZATA = snapshot.val();	
EEE=BAZATA;if(EEE==null){usrFRE(true);}else{usrFRE(false);}
 
});}

function snd2ckM(a){
MyallBase.child("REG@").child(A).once("value").then(function(snapshot) {BAZATA = snapshot.val();	
EEE=BAZATA;if(EEE==null){mailFRE(true);}else{mailFRE(false);}});

}


function OKname(a){
if((a.includes("/"))||
   (a.includes("#"))||
   (a.includes("."))||
   (a.includes(","))||
   (a.includes("`"))||
   (a.includes("|"))||
   (a.includes("'"))||
   (a.includes('"'))||
   (a.includes(" "))||
   (a.includes("["))||
   (a.includes("]"))||
   (a.includes("%")))
{return false;}else{return true;}}


var USERdef;
var mailID;
var CC,DD;
function KOJeOVOJ(a){ /// ovdeka se pravi updajtot za userko

			
		mailID=a.slice(0,a.length-4);
		
		USERdef="REG@/"+mailID;
		
MyallBase.child(USERdef);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["REG@"][mailID];
 
	if(DD!=undefined){
		console.log("ovaj postoi  user ",mailID);
		      document.getElementById("user_para").innerHTML = "https://myall.sytes.net<br>/" + DD; LOADNIall();
		}else{
		console.log("ovaj user  go nema  WELCOME",mailID);}
  });	 
}


		

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "contents";
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
	document.getElementById("ErorTXT").display="block";
	document.getElementById("Lin").style.display = "none";
    document.getElementById("Sup").style.display = "block";}else{
	document.getElementById("ErorTXT").display="none";
	document.getElementById("Lin").style.display = "block";
    document.getElementById("Sup").style.display = "none";}

}
var eMAIL;
function SingUP(){
	if((Parametar[0])&&(Parametar[1])&&(Parametar[2])){
  var email = document.getElementById("email_field_2").value;   eMAIL=email.slice(0,email.length-4);
  var password = document.getElementById("password_field_2").value;
	
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
setTimeout(function(){
LERo_0={"Activity":{ "L0":[[false,0],""], "L1":[[false,0],""], "L2":[[false,0],""], "L3":[[false,1],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Contact":{ "L0":[[false,0],""], "L1":[[false,-1],""], "L2":[[false,1],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "PROFIL":{ "FOTO":{ "Fime":"", "Flink":false }, "IME":"", "RANK":0, "REG":{ "ID":"", "email":"", "veri":0 }, "SETINGS":{ "S0":"11", "S1":"32" }, "STATUS":{ "AKTIV":true, "SEY":"" } }, "Peyment":{ "L0":[[false,2],""], "L1":[[false,1],""], "L2":[[false,2],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Social":{ "L0":[[false,4],""], "L1":[[false,4],""], "L2":[[false,3],""], "L3":[[false,-1],""], "L4":[[false,0],""], "L5":[[false,0],""] }}
	


firebase.database().ref().child("REG@").child(eMAIL).set(USerko);
firebase.database().ref().child("URLuser").child(USerko).set(LERo_0);

firebase.database().ref().child("URLuser").child(USerko).child("PROFIL").child("REG").child("email").set(email);

	alert("accaunt sucsecsful created ");

setTimeout(function(){location.reload();}, 1000);

 	
	}, 1500);
}else{
if(Parametar[0]!=true){TXTO="heyy dude take other username..";}else
if(Parametar[1]!=true){TXTO="this email is unvaeble for sign up..";}else
{TXTO="paswort to short,, dude comone think somthink long";}
document.getElementById("ErorTXT").innerHTML=TXTO;}

}


function SND_vrf(a){var user = firebase.auth().currentUser;
	if(a==0){
user.sendEmailVerification().then(function() {
  // Email sent.
  
  
}).catch(function(error) {
  // An error happened.
});

}

if (user.emailVerified) {
if(a!=true){MyallBase.child("URLuser").child(DD).child("PROFIL").child("REG").child("veri").set(true);}}
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


}



//////////////////// modalo

// Get the modal
var modal = document.getElementById("myModal");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_PROFIL = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";}
  
span_PROFIL.onclick = function() {
  modal_PROFIL.style.display = "none";}

var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=  document.getElementById("Lopci");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	
LOPCI.style="display: none;";
  
  }
  
  
  if (event.target == modal_PROFIL) {
  modal_PROFIL.style.display = "none";
  }

  
}


////////////////////////// modelskoto kopce
function MDL_PROFIL(){modal_PROFIL.style.display = "block";
a=GTD["PROFIL"]["REG"]["veri"];
if(a==true){
document.getElementById("E_status").innerHTML="verifyed";}else{
document.getElementById("E_status").innerHTML="unverified";}
}
	

var FTO_UPLOAD_view=document.getElementById("wew"); var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButon");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("USER_pic").child(DD).child("PROFIL_pic/"+file.name);

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){ 
FTO_UPLOAD_view.src =reader.result;}
reader.readAsDataURL(file);

firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("FOTO").child("Fime").set(file.name);

NOVO_FOTO_iME=file.name;



storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  FTO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 

function PREview(){window.open("https://myall.sytes.net/"+DD);}

function UPD_PROFILO(T){
	
// se ubacuvat datada u data baza..
// se updejtnuva datata so LOKALNITE promeni

/// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
/// ako ne da ne je uploadnuva istata slika
promSTATUS();
promeniTUKA();

T.parentElement.children[0].click();// da closne modale
}

function promSTATUS(){b=GTD["PROFIL"]["STATUS"]["SEY"];
a=document.getElementById("PROFIL_status").value.slice(0,141);
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("STATUS").child("SEY").set(a);}}

function promeniTUKA(){
	if(FTO_url!=false){
stara_FTOname=GTD["PROFIL"]["FOTO"]["Fime"];
if(stara_FTOname!=NOVO_FOTO_iME){
document.getElementById("PROFI_pic").src=FTO_url;
firebase.database().ref().child("URLuser").child(DD).child("PROFIL").child("FOTO").child("Flink").set(FTO_url);}

}}

if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"
}else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}

function STAR_info(a) {
  var x = document.getElementById("info_star");
if(x.innerHTML.length<1){
if(a==0){txt="some free welcome text status. 0 -141 character status ";}else
if(a==1){txt="its 200x200 PX placeholder with acteable transparent png capability";}else
if(a==2){txt="you can be verifyed<br><a href='/Verification/'>see policy off verification & peyment process</a>";}
x.innerHTML=txt;}else{x.innerHTML="";}

} 

function BYproces(){txt="https://www.paypal.com/paypalme/MyallStar";
window.open(txt);}

function DROPdwnbtn(){
	if(LOPCI.style.display=="block"){LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}
}
var R_0="";var STATS_linkce,R_1,R_2,StalazINDEX,LINK_TXT;
var R=[STATS_linkce,R_1,R_2,StalazINDEX,LINK_TXT];
/// PAR i par se parametri od setinzi zimanje

var parCAT,parRUB;


var L;
function MDL(b) {R_2="L"+b;parRUB=b;                /// be e id na stalaza
  modal.style.display = "block";
 StalazINDEX=AR[parCAT][b][0][0][1];
if(parCAT!=0){
document.getElementById("SHW_link").innerHTML=DTA[parCAT][StalazINDEX]+AR[parCAT][b][0][1];
}else{
document.getElementById("SHW_link").innerHTML=DTA[parCAT][0]+AR[parCAT][b][0][1];}


document.getElementById("LINK_txt").value=AR[parCAT][b][0][1];


SETbLOGO();

L=document.getElementsByClassName("LL");
for(i=0;i<L.length;i++){
	if(i<DTA[parCAT].length){
	L[i].style="display:block;";
	L[i].innerHTML=DTA[parCAT][i];
	}else{		
	L[i].style="display:none;";
	}

}

}
var SW=document.getElementsByClassName("switch")[0].children[0];	

function SHW_LinkUPDT(A){a=A.value;
b=A.parentElement.parentElement.children[1];
OKbtn=A.parentElement.children[1].children[0];
if(OKname_1(a)){if(OKbtn.style.display!="block"){OKbtn.style.display="block";}
b.innerHTML=DTA[parCAT][StalazINDEX]+A.value;
}else{if(OKbtn.style.display!="none"){OKbtn.style.display="none";}
b.innerHTML="unsuported Charakter spoted .not allowed(#,$,<'/)";}}
	
function OKname_1(a){
if((a.includes("</"))||
   (a.includes("#"))||
   (a.includes("$")))
{return false;}else{return true;}}



function SETbLOGO(){if(parCAT!=0){
document.getElementById("Btn_LOGO").classList=F_Logo[parCAT][StalazINDEX];
}else{
document.getElementById("Btn_LOGO").classList=F_Logo[0][0];}}

function par(a){StalazINDEX=a;  LOPCI.style="display: none;";

document.getElementById("SHW_link").innerHTML=DTA[parCAT][StalazINDEX]+document.getElementById("LINK_txt").value;


SETbLOGO();
}


function MESTENJE(a,b){
if(b==1){
STATS_linkce=a.parentElement.parentElement.parentElement.children[2].children[0].children[2].children[0].checked;
LINK_TXT=document.getElementById("LINK_txt").value;
firebase.database().ref().child("URLuser").child(DD).child(R_1).child(R_2).set([[STATS_linkce,StalazINDEX],LINK_TXT]);


ST_svg();
}


a.parentElement.parentElement.parentElement.children[0].click();// da closne modale
}


function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function STATS(A){a=A.checked;if(a){
	
if(GTD["PROFIL"]["STATUS"]["AKTIV"]!=true){GTD["PROFIL"]["STATUS"]["AKTIV"]=true;
MyallBase.child("URLuser").child(DD).child("PROFIL").child("STATUS").child("AKTIV").set(true);}
	}else{  
if(GTD["PROFIL"]["STATUS"]["AKTIV"]!=false){GTD["PROFIL"]["STATUS"]["AKTIV"]=false;
MyallBase.child("URLuser").child(DD).child("PROFIL").child("STATUS").child("AKTIV").set(false);}}}



function LOADNIall(){
	
DAJval("PROFIL","RANK",0);

};


function ST_svg(){ 
if(parCAT==0){
	AR[0][parRUB][1].children[2].innerHTML=svg_ASPC[0][0];
	AR[0][parRUB][1].children[2].children[0].children[0].innerHTML="https://"+document.getElementById("LINK_txt").value;
	
}else{
	AR[parCAT][parRUB][1].children[0].innerHTML=document.getElementById("SHW_link").innerHTML;
	AR[parCAT][parRUB][1].children[2].innerHTML=svg_ASPC[parCAT][StalazINDEX];}
}
function puniLokalno(){
//ld("REG").child("veri").
E_status=GTD["PROFIL"]["REG"]["veri"];
SND_vrf(E_status);


fotoLINK=GTD["PROFIL"]["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="../img/deflat.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}
	
for(i=0;i<4;i++){
	for(q=0;q<3;q++){
		AR[i][q][0]=GTD[proz1[i].toString()][proz2[q].toString()];
	}
}
GETaccSTATUS(GTD["PROFIL"]["STATUS"]["AKTIV"]);

document.getElementById("PRO_STATUS").innerHTML=GTD["PROFIL"]["STATUS"]["SEY"];



for(z=0;z<4;z++){
	for(Z=0;Z<3;Z++){ /// broj na babeelsi
		
		if((AR[z][Z][0][0][0])&&(AR[z][Z][0][0][1]!=-1)){
			if(z==0){
			AR[0][Z][1].children[2].innerHTML=svg_ASPC[0][0];
			AR[0][Z][1].children[2].children[0].children[0].innerHTML=DTA[0][0]+AR[0][Z][0][1];
			
			}else{ Q=AR[z][Z][0][0][1];
				AR[z][Z][1].children[2].innerHTML=svg_ASPC[z][Q];
			}
		}
	}
}

}

var toBACK="rane";
var GTD;
function DAJval(a,b,ELEM){LINKtxt="URLuser/"+DD+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 GTD=toBACK["URLuser"][DD];
 toBACK=toBACK["URLuser"][DD][a][b];
 
 UPDATE(ELEM,toBACK);
	
  });	
}