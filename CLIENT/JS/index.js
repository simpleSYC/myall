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



var  USERlinkceto="aaa";
var CC,DD;
function CEKuser(){
		
		
		
		USERlinkceto="URLuser/"+USER  
MyallBase.child(USERlinkceto);
MyallBase.once("value")
  .then(function(snapshot) {
     CC = snapshot.val();
	 
 DD=CC["URLuser"][USER];
 
	if(DD!=null){
		console.log("ovaj postoi  user ",USER);return true;}else{
		console.log("ovaj user  go nema",USER);return false;}
 
	
  });	
	
}

var toBACK="rane";
function UPDATE(a,b){a.innerHTML=b;}
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




function Start(){

if(CEKuser()){ DAJval("Social","L0",IME);
 //innerHTML=toBACK;
	
}else{
IME.innerHTML="da si naprae akaunt";	
}


}






