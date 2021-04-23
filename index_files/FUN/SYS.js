var STATS_linkce,KRUG_o,KRUG_O,StalazINDEX,LINK_TXT,parRUB;

var MeM={};

var ErorINFO=document.getElementById("ErorTXT");
var SW=document.getElementsByClassName("switch")[0].children[0];
var p0,p1,p2;var Par=[p0,p1,p2]; for(i=0;i<3;i++){Par[i]=false;}

function Imenik (a){b="https://mylinks.sytes.net/";if(a.length>0){d="";}else{d="1kinger";}
			document.getElementById("TitLINK").innerHTML=b+d+a;
if(a.length<4){ErorINFO.innerHTML="Username must be longer than 3 charakters";}
else{CEK_singupUSERNAME(a);}}

function CKMail(A){if(A.length>4){let a=A.slice(0,A.length-4);Par[1]=false;if(OKname(a)){snd2ckM(a);}
else{ErorINFO.innerHTML="Unsuported email type";}}else{ErorINFO.innerHTML="";}}

function snd2ckM(a){MyallBase.child("REG@/LINKS/email/"+a).once("value").then(function(snapshot){
let B_data = snapshot.val();if(B_data){MAIL_FREE(false);}else{MAIL_FREE(true);}});}

function CEK_singupUSERNAME(a){Par[0]=false;if(OKname(a)){snd2ckU(a);}
else{ErorINFO.innerHTML="los karakter";}}

function snd2ckU(a){MyallBase.child("REG@/LINKS/user/"+a).once("value").then(function(snapshot){
let B_data = snapshot.val();if(B_data){USER_FREE(false);}else{USER_FREE(true);}});}

function USER_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[0]=true;}else{ErorINFO.innerHTML="this username is alredy taken";    Par[0]=false;}}
function MAIL_FREE(a){if(a)     {ErorINFO.innerHTML="";Par[1]=true;}else{ErorINFO.innerHTML="this email is alredy used ";       Par[1]=false;}}
function PAS_L(a){if(a.length>7){ErorINFO.innerHTML="";Par[2]=true;}else{ErorINFO.innerHTML="pasword must be over 8 charakters";Par[2]=false;}}


function PREview(a){window.open("https://mylinks.sytes.net/"+a);}

function BYproces(a){let txt="https://mylinks.sytes.net/Verification/#"+a;
window.open(txt);}


function OKname(a){
    if((a.includes("/"))||(a.includes("#"))||(a.includes("."))||
       (a.includes(","))||(a.includes("`"))||(a.includes("|"))||
       (a.includes("'"))||(a.includes('"'))||(a.includes(" "))||
       (a.includes("["))||(a.includes("]"))||(a.includes("%")))
    {return false;}else{ErorINFO.innerHTML="";return true;}}

function OKname_1(a){
    if((a.includes("</"))||
       (a.includes("#"))||
       (a.includes("$")))
    {return false;}else{return true;}}


function Turi_ACT_email(a){document.getElementById("usr_email").innerHTML="( "+a+".com )";}
function CHK_vrf(Status_ver){  var user = firebase.auth().currentUser;
                                var BTN_ver=document.getElementById("re_snd_email"); BTN_ver.style="width: auto;";
 if(Status_ver){
	 // da se trgne resend button
BTN_ver.style.display="none";
BTN_ver.onclick=function(){};
BTN_ver.innerHTML="";
document.getElementById("E_status").innerHTML="verifyed";
 }else{
BTN_ver.style.display="inline-block";
BTN_ver.onclick=function(){SND_vrf();BTN_ver.innerHTML="email alredy send ..";BTN_ver.onclick=function(){};};
BTN_ver.innerHTML="verification email send ";
document.getElementById("E_status").innerHTML="unverified";}
 
 
if(user.emailVerified) {
if(!Status_ver){MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/REG/veri").set(true);}}
}


function ADDni_novUSER(u){let UID=u.uid;
let em4=u.email.slice(0,u.email.length-4);
let USR_NME=document.getElementById("username_field").value;

let BLANKO_4_WEB={
"MYLINKS":{
    "Activity":"","Contact":"","Peyment":"","Social":"",
    "PROFIL":{ "FOTO":{ "Fime":"", "Flink":false },
    "RANK":0,
    "SETINGS":{ "S0":"11", "S1":"32" },
    "STATUS":{ "AKTIV":true, "SEY":"" },
    "IME":USR_NME,
    "REG":{"veri":0}}},
"MYLOCAL":{
    "JBS":{
    	0:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
    	1:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
    	2:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
    	3:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false},
    	4:{TITLE:false,IMG:{F_ime:false,F_src:false},JBS_STATUS:false,JBS_DESC:false}},
    "PROFIL":{"G_MAPS":{STATUS:false,Loc:{NAME:false,KOD:false,FULL:false}},
    "FOTO":{ "Fime":"", "Flink":false },
    "RANK":0,
    "SETINGS":{ MYlinks:false },
    "STATUS":{ "AKTIV":false, "SEY":"" },
    "IME":USR_NME,
    "REG":{"veri":0}}}};
                                       let BLANKO_4_PRIVAT=BLANKO_4_WEB;
MyallBase.child("ID/"+UID+"/"+USR_NME).set(BLANKO_4_PRIVAT);

BLANKO_4_WEB["MYLINKS"]["PROFIL"]["IME"]=null;
BLANKO_4_WEB["MYLINKS"]["PROFIL"]["REG"]["veri"]=null;

BLANKO_4_WEB["MYLOCAL"]["PROFIL"]["IME"]=null;
BLANKO_4_WEB["MYLOCAL"]["PROFIL"]["REG"]["veri"]=null;
                                                
MyallBase.child("ID/"+UID+"/email").set(em4); 
MyallBase.child("ID/"+UID+"/AKK").set(USR_NME);
    
MyallBase.child("MYLINKS/"+USR_NME).set(BLANKO_4_WEB["MYLINKS"]);
MyallBase.child("MYLOCAL/"+USR_NME).set(BLANKO_4_WEB["MYLOCAL"]);

MyallBase.child("REG@/LINKS/email/"+em4).set(true);
MyallBase.child("REG@/LINKS/user/"+USR_NME).set(true);
    
setTimeout(function(){KOJeOVOJ(u);},1000);}
