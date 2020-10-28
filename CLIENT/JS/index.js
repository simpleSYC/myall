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

var TITLE= document.getElementById("demo"); TITLE.innerHTML ="https://myall.sytes.net/"+USER;





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
if((CC["URLuser"][USER]["PROFIL"]["STATUS"]["AKTIV"]!=true)&&(CC["URLuser"][USER]["PROFIL"]["STATUS"]["AKTIV"]!=false)){
DEL_NVG();
document.getElementById("PRO_STATUS").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a>is alredy suspended</a><br>";

}else{ DAJval("PROFIL","RANK",0); 
document.getElementsByClassName("containerX")[0].style="opacity:1;";}}

else{ DEL_NVG();
document.getElementById("PRO_STATUS").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://myall.sytes.net/'>Create that acc</a>";}
 	
  });}

function puniLokalno(){
	
document.getElementById("PRO_STATUS").innerHTML=GTD["PROFIL"]["STATUS"]["SEY"];
fotoLINK=GTD["PROFIL"]["FOTO"]["Flink"];
if(fotoLINK==false){
document.getElementById("PROFI_pic").src="../img/deflat.png";
}else{document.getElementById("PROFI_pic").src=fotoLINK;}


	

if(GETaccSTATUS(GTD["PROFIL"]["STATUS"]["AKTIV"])){
for(i=0;i<4;i++){
	for(q=0;q<3;q++){
		AR[i][q][0]=GTD[proz1[i].toString()][proz2[q].toString()];
		     Q=AR[i][q][0][0][1];
		AR[i][q][1].children[0].innerHTML=DTA[i][Q]+AR[i][q][0][1];
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
			
			}else{ Q=AR[z][Z][0][0][1];
				AR[z][Z][1].children[2].innerHTML=svg_ASPC[z][Q];
		
			}
		}else{AR[z][Z][1].remove();}
	}
 }
}else{
	document.getElementsByClassName("outside-layer")[0].remove();
	document.getElementsByClassName("middle-layer")[0].remove();}


}

/// AR[1][0][0][0][1]

function OPND(a){ X=AR[parCAT][a][0][0][1];
	TXTETO=DTA[parCAT][X]+AR[parCAT][a][0][1];
	a.target="_blank"; window.open(TXTETO);}


var MDLcontact=document.getElementById("MDL_contact");
function SHWcontact(a){  X=AR[parCAT][a][0][0][1];
	TXTETO=DTA[parCAT][X]+"<br><br>"+AR[parCAT][a][0][1];

MDLcontact.style="display:block;";
MDLcontact.children[0].children[1].innerHTML=TXTETO;}

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


function DEL_NVG(){
	document.getElementById("PROFI_pic").remove();
	document.getElementById("AJDE").remove();}

function Start(){
	CEKuser();




}

