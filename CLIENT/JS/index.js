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
 
 
 
 if(DD){ DAJval("Social","L0",IME);
 
 DAJval("PROFIL","RANK",0); 
 
 
 
 //innerHTML=toBACK;
 
 
document.getElementById("user_div").style="display:block;";
 
document.getElementsByClassName("containerX")[0].style="opacity:1;";
	
}else{
IME.innerHTML="da si naprae akaunt";	

//document.getElementById("user_div").style="display:block;";

//document.getElementsByClassName("containerX")[0].style="opacity:1;";
}
 
	
  });	
	
}

var toBACK="rane";
function DAJval(a,b,ELEM){LINKtxt="URLuser/"+USER+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 
 toBACK=toBACK["URLuser"][USER][a][b];
 
UPDATE(ELEM,toBACK);	
	
  });	
  
}
Start();


/// b e kodirano
//0- zvezid

function UPDATE(a,b){
if(a==0){ updZvzda(parseInt(b));}else{

a.innerHTML=b;}	

}

function Start(){
	CEKuser();




}
var z23=document.getElementById("z_23");
var z13=document.getElementById("z_13");
var z32=document.getElementById("z_32");
var ZZ=[z23,z13,z32];

function updZvzda(a){
	if(a==0){for(i=0;i<ZZ.length;i++){ZZ[i].remove();}}else
	if(a==1){
		ZZ[0].remove();
		ZZ[1].style="opacity:1;scale:3;fill:gold;transform:translate(2px,25px);";
		ZZ[2].remove();}else
	if(a==2){
		ZZ[0].style="opacity:1;scale:3;fill:gold;top:transform:translate(-10px,25px);";
		ZZ[1].remove();
		ZZ[2].style="opacity:1;scale:3;fill:gold;transform:translate(15px,25px);";}else
	if(a==3){
		ZZ[0].style="opacity:1;scale:3;fill:gold;transform:translate(-15px,22px);";
		ZZ[1].style="opacity:1;scale:3;fill:gold;transform:translate(2px,25px);";
		ZZ[2].style="opacity:1;scale:3;fill:gold;transform:translate(19px,22px);";}
}


