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
  
//definicija  
var USER=window.location.href.slice(24);var MyallBase = firebase.database().ref();

var TITLE= document.getElementById("demo"); TITLE.innerHTML ="https//myall.sytes.net/"+USER;

var IME=document.getElementById("demo22");


var IME22=document.getElementById("RANKE");





var  USERlinkceto="aaa";
var CC,DD;
function CEKuser(){
		
		
		
		USERlinkceto="URLuser/"+USER  
MyallBase.child(USERlinkceto);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["URLuser"][USER];
 
	if(DD!=undefined){
		console.log("ovaj postoi  user ",USER);DD=true;}else{
		console.log("ovaj user  go nema",USER);DD=false;}
 
 
 
 if(DD){
 
 DAJval("PROFIL","RANK",0); 

 
document.getElementsByClassName("containerX")[0].style="opacity:1;";
	
}else{
IME.innerHTML="da si naprae akaunt";	

//document.getElementById("user_div").style="display:block;";

//document.getElementsByClassName("containerX")[0].style="opacity:1;";
}
 
	
  });	
	
}

function puniLokalno(){
	
document.getElementById("PRO_STATUS").innerHTML=GTD["PROFIL"]["STATUS"]["SEY"];
fotoLINK=GTD["PROFIL"]["FOTO"]["Flink"];

document.getElementById("PROFI_pic").src=fotoLINK;

	

if(GETaccSTATUS(GTD["PROFIL"]["STATUS"]["AKTIV"])){
for(i=0;i<4;i++){
	for(q=0;q<3;q++){ Q=GTD[proz1[i].toString()][proz2[q].toString()][0][1];
		AR[i][q][0]=GTD[proz1[i].toString()][proz2[Q].toString()][0];
	}
}

for(z=0;z<4;z++){
	for(Z=0;Z<3;Z++){ /// broj na babeelsi
		
		if((AR[z][Z][0][0][0])&&(AR[z][Z][0][0][1]!=-1)){
			if(z==0){
			AR[0][Z][1].children[2].innerHTML=svg_ASPC[0][0];
			AR[0][Z][1].children[2].children[0].children[0].innerHTML=DTA[0][0]+AR[0][Z][0][1];
			
			AR[0][Z][1].children[1].remove();// brisenje topce klientsko
			
			AR[0][Z][1].children[0].remove();// brisenje topce titleto
			
			}else{
				AR[z][Z][1].children[2].innerHTML=svg_ASPC[z][Z];				
			}
		}else{AR[z][Z][1].remove();}
	}
 }
}else{
	document.getElementsByClassName("outside-layer")[0].remove();
	document.getElementsByClassName("middle-layer")[0].remove();}


}

function OPND(a){ TXTETO=DTA[parCAT][a]+AR[parCAT][a][0][1];
window.open(TXTETO);}


var MDLcontact=document.getElementById("MDL_contact");
function SHWcontact(a){TXTETO=DTA[parCAT][a]+"<br><br>"+AR[parCAT][a][0][1];

MDLcontact.style="display:block;";
MDLcontact.children[0].children[1].innerHTML=TXTETO;
}

function GETaccSTATUS(a){if(a){console.log(" TRUEEEEEEEEEEE");}else{console.log("FALSEEE");} return a;}

var toBACK="rane";
function DAJval(a,b,ELEM){LINKtxt="URLuser/"+USER+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 
	 GTD=toBACK["URLuser"][USER];
	 
 toBACK=toBACK["URLuser"][USER][a][b];
 
UPDATE(ELEM,toBACK);	
	
  });	
  
}
Start();



function Start(){
	CEKuser();




}

