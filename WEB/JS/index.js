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


var MyallBase = firebase.database().ref();
var ErorINFO=document.getElementById("ErorTXT");
var SW=document.getElementsByClassName("switch")[0].children[0];
var p0,p1,p2;var Par=[p0,p1,p2]; for(i=0;i<3;i++){Par[i]=false;}

function Imenik (a){b="https://mylinks.sytes.net/";if(a.length>0){d="";}else{d="1kinger";}
			document.getElementById("TitLINK").innerHTML=b+d+a;
if(a.length<4){ErorINFO.innerHTML="Username must be longer than 3 charakters";}
else{CEK_singupUSERNAME(a);}}

function CKMail(A){if(A.length>4){a=A.slice(0,A.length-4);Par[1]=false;if(OKname(a)){snd2ckM(a);}
else{ErorINFO.innerHTML="Unsuported email type";}}else{ErorINFO.innerHTML="";}}

function snd2ckM(a){MyallBase.child("REG@/email/"+a).once("value").then(function(snapshot){
B_data = snapshot.val();if(B_data){MAIL_FREE(false);}else{MAIL_FREE(true);}});}

function CEK_singupUSERNAME(a){Par[0]=false;if(OKname(a)){snd2ckU(a);}
else{ErorINFO.innerHTML="los karakter";}}

function snd2ckU(a){MyallBase.child("REG@/user/"+a).once("value").then(function(snapshot){
B_data = snapshot.val();if(B_data){USER_FREE(false);}else{USER_FREE(true);}});}


function USER_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[0]=true;}else{ErorINFO.innerHTML="this username is alredy taken";    Par[0]=false;}}
function MAIL_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[1]=true;}else{ErorINFO.innerHTML="this email is alredy used ";       Par[1]=false;}}
function PAS_L(a){if(a.length>7){ErorINFO.innerHTML="";Par[2]=true;}else{ErorINFO.innerHTML="pasword must be over 8 charakters";Par[2]=false;}}


function OKname(a){
if((a.includes("/"))||(a.includes("#"))||(a.includes("."))||
   (a.includes(","))||(a.includes("`"))||(a.includes("|"))||
   (a.includes("'"))||(a.includes('"'))||(a.includes(" "))||
   (a.includes("["))||(a.includes("]"))||(a.includes("%")))
{return false;}else{ErorINFO.innerHTML="";return true;}}


var SIFRA,userNAME,W;function KOJeOVOJ(a){
                SIFRA=a.uid;
USERdef="USER/"+SIFRA;
		                                          
MyallBase.child(USERdef).once("value")
  .then(function(snapshot) {
     CekDATA = snapshot.val();
	 
	if(CekDATA!=undefined){userNAME=CekDATA["ID"]; W=CekDATA[userNAME]; puniLokalno();  Turi_ACT_email(CekDATA["email"]);
  document.getElementById("user_para").innerHTML = "https://mylinks.sytes.net<br>/" + userNAME;}
	else{ADDni_novUSER(a);}
  });	 
}

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

function logout(){
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
function Turi_ACT_email(a){document.getElementById("usr_email").innerHTML="( "+a+".com )";}
function CHK_vrf(Status_ver){  var user = firebase.auth().currentUser;
                                var BTN_ver=document.getElementById("re_snd_email"); BTN_ver.style="width: auto;";
 if(Status_ver){
	 // da se trgne resend button
BTN_ver.style.display="none";
BTN_ver.onclick=function(){};
BTN_ver.innerHTML="";
 }else{
BTN_ver.style.display="inline-block";
BTN_ver.onclick=function(){SND_vrf();BTN_ver.innerHTML="email alredy send ..";BTN_ver.onclick=function(){};};
BTN_ver.innerHTML="verification email send ";}
 
 
if(user.emailVerified) {
if(!Status_ver){MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/REG/veri").set(true);}}

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


// Get the modal
var modal = document.getElementById("myModal");
var modal_PROFIL = document.getElementById("Modal_PROFIL");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_PROFIL = document.getElementsByClassName("close")[1];

       span.onclick = function() {modal.style.display = "none";}
span_PROFIL.onclick = function() {modal_PROFIL.style.display = "none";}

var DROPdwnBTN=document.getElementById("MENIlink");
var LOPCI=  document.getElementById("Lopci");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	LOPCI.style="display: none;";}
  
  if (event.target == modal_PROFIL) {modal_PROFIL.style.display = "none";}
}


////////////////////////// modelskoto kopce
function MDL_PROFIL(){modal_PROFIL.style.display = "block";
a=W["PROFIL"]["REG"]["veri"];
if(a==true){
document.getElementById("E_status").innerHTML="verifyed";}else{
document.getElementById("E_status").innerHTML="unverified";}
}

var FTO_UPLOAD_view=document.getElementById("wew"); var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButon");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("USER_pic/"+userNAME+"/PROFIL_pic/"+file.name);

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

MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/FOTO/Fime").set(file.name);
MyallBase.child("WEBuser/"+userNAME+"/PROFIL/FOTO/Fime").set("ProfilPIC");

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
});});}); 

function PREview(){window.open("https://mylinks.sytes.net/"+userNAME);}

function UPD_PROFILO(){
	
// se ubacuvat datada u data baza..
// se updejtnuva datata so LOKALNITE promeni

/// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
/// ako ne da ne je uploadnuva istata slika
promSTATUS();
promeniTUKA();

modal_PROFIL.style.display = "none";}

function promSTATUS(){b=W["PROFIL"]["STATUS"]["SEY"];
a=document.getElementById("PROFIL_status").value.slice(0,141);
document.getElementById("PRO_STATUS").innerHTML=a;

if(b!=a){
MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/SEY").set(a);
MyallBase.child("WEBuser/"+userNAME+"/PROFIL/STATUS/SEY").set(a);}}

function promeniTUKA(){
	if(FTO_url!=false){
stara_FTOname=W["PROFIL"]["FOTO"]["Fime"];
if(stara_FTOname!=NOVO_FOTO_iME){
document.getElementById("PROFI_pic").src=FTO_url;
MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/FOTO/Flink").set(FTO_url);
MyallBase.child("WEBuser/"+userNAME+"/PROFIL/FOTO/Flink").set(FTO_url);}

}}


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
var STATS_linkce,R_1,R_2,StalazINDEX,LINK_TXT;


var parCAT,parRUB;


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
	L[i].innerHTML=DTA[parCAT][i];}
	else{L[i].style="display:none;";}}
}

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
     document.getElementById("Btn_LOGO").classList=F_Logo[parCAT][StalazINDEX];}
else{document.getElementById("Btn_LOGO").classList=F_Logo[0][0];}}

function par(a){StalazINDEX=a;  LOPCI.style="display: none;";

document.getElementById("SHW_link").innerHTML=DTA[parCAT][StalazINDEX]+document.getElementById("LINK_txt").value;
SETbLOGO();}


function MESTENJE(a,b){
if(b==1){
STATS_linkce=a.parentElement.parentElement.parentElement.children[2].children[0].children[2].children[0].checked;
LINK_TXT=document.getElementById("LINK_txt").value;
MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/"+R_1+"/"+R_2).set([[STATS_linkce,StalazINDEX],LINK_TXT]);
MyallBase.child("WEBuser/"+userNAME+"/"+R_1+"/"+R_2).set([[STATS_linkce,StalazINDEX],LINK_TXT]);


ST_svg();}


a.parentElement.parentElement.parentElement.children[0].click();} // da closne modale


function STATS(A){a=A.checked;if(a){
	
if(W["PROFIL"]["STATUS"]["AKTIV"]!=true){W["PROFIL"]["STATUS"]["AKTIV"]=true;
MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/AKTIV").set(true);
MyallBase.child("WEBuser/"+userNAME+"/PROFIL/STATUS/AKTIV").set(true);}
	}else{  
if(W["PROFIL"]["STATUS"]["AKTIV"]!=false){W["PROFIL"]["STATUS"]["AKTIV"]=false;
MyallBase.child("USER/"+SIFRA+"/"+userNAME+"/PROFIL/STATUS/AKTIV").set(false);
MyallBase.child("WEBuser/"+userNAME+"/PROFIL/STATUS/AKTIV").set(false);

}}}



function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function BTN_za_SND_M(a){
	
}

function ST_svg(){ 
if(parCAT==0){
	AR[0][parRUB][1].children[2].innerHTML=svg_ASPC[0][0];
	AR[0][parRUB][1].children[2].children[0].children[0].innerHTML="https://"+document.getElementById("LINK_txt").value;
	
}else{
	AR[parCAT][parRUB][1].children[0].innerHTML=document.getElementById("SHW_link").innerHTML;
	AR[parCAT][parRUB][1].children[2].innerHTML=svg_ASPC[parCAT][StalazINDEX];}
}
function puniLokalno(){
updZvzda(parseInt(W["PROFIL"]["RANK"]));
E_status=W["PROFIL"]["REG"]["veri"];

CHK_vrf(E_status);


fotoLINK=W["PROFIL"]["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="img/deflat.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}
	
for(i=0;i<4;i++){
	for(q=0;q<3;q++){
		AR[i][q][0]=W[proz1[i].toString()][proz2[q].toString()];
	}
}
GETaccSTATUS(W["PROFIL"]["STATUS"]["AKTIV"]);

document.getElementById("PRO_STATUS").innerHTML=W["PROFIL"]["STATUS"]["SEY"];



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


function ADDni_novUSER(USER){
UID=USER.uid;
email=USER.email;
userNAME= document.getElementById("username_field").value;
	
Privat={"Activity":{"L0":[[false,0],""], "L1":[[false,0],""], "L2":[[false,0],""], "L3":[[false,1],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Contact":{ "L0":[[false,0],""], "L1":[[false,-1],""], "L2":[[false,1],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] },"Peyment":{ "L0":[[false,2],""], "L1":[[false,1],""], "L2":[[false,2],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Social":{ "L0":[[false,4],""], "L1":[[false,4],""], "L2":[[false,3],""], "L3":[[false,-1],""], "L4":[[false,0],""], "L5":[[false,0],""] },
"PROFIL":{ "FOTO":{ "Fime":"", "Flink":false },
"IME":"", "RANK":0,
"REG":{ "veri":0 },
"SETINGS":{ "S0":"11", "S1":"32" },
"STATUS":{ "AKTIV":true, "SEY":"" }}}

Web={"Activity":{"L0":[[false,0],""], "L1":[[false,0],""], "L2":[[false,0],""], "L3":[[false,1],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Contact":{ "L0":[[false,0],""], "L1":[[false,-1],""], "L2":[[false,1],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] },"Peyment":{ "L0":[[false,2],""], "L1":[[false,1],""], "L2":[[false,2],""], "L3":[[false,0],""], "L4":[[false,0],""], "L5":[[false,0],""] }, "Social":{ "L0":[[false,4],""], "L1":[[false,4],""], "L2":[[false,3],""], "L3":[[false,-1],""], "L4":[[false,0],""], "L5":[[false,0],""] },
"PROFIL":{ "FOTO":{ "Fime":"", "Flink":false },
"RANK":0,
"SETINGS":{ "S0":"11", "S1":"32" },
"STATUS":{ "AKTIV":true, "SEY":"" }}}
											em4=email.slice(0,email.length-4);
MyallBase.child("USER/"+UID+"/"+userNAME).set(Privat);
MyallBase.child("USER/"+UID+"/ID").set(userNAME);
MyallBase.child("USER/"+UID+"/email").set(em4);

MyallBase.child("WEBuser/"+userNAME).set(Web);
                              
MyallBase.child("REG@/email/"+em4).set(true);
MyallBase.child("REG@/user/"+userNAME).set(true);
Loadni_noviot(UID);


 
}

function Loadni_noviot(a){                         
MyallBase.child("USER/"+a).once("value")
  .then(function(snapshot) {
         Freski = snapshot.val();
userNAME=Freski["ID"];  W=Freski[userNAME]; puniLokalno(); Turi_ACT_email(Freski["email"]);
 document.getElementById("user_para").innerHTML = "https://mylinks.sytes.net<br>/" + userNAME; 
  });	 
}
 
ScrenRedsing();function ScrenRedsing(){
if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;";}
else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;";}}

var input = document.getElementsByTagName("input")[1];///press enter to work 
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {event.preventDefault();
  document.getElementsByTagName("button")[0].click();}}); 