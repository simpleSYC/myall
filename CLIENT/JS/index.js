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
  
  



var MyallBase = firebase.database().ref();


var USER=window.location.href.slice(24); document.getElementById("demo").innerHTML ="https//myall.sytes.net/"+USER;

START(USER);

function START(a){LINKtxt_1="URLuser/"+a;
MyallBase.child(LINKtxt_1);
MyallBase.once("value")
  .then(function(snapshot) {
	  
	  if(snapshot.hasChildren()){console.log("ovaj postoi  user ",a);
		   document.getElementById("demo22").innerHTML=DAJval("Social","L0");
	  }else{                     console.log("ovaj user  go nema",a);
		  document.getElementById("demo22").innerHTML="da si naprae akaunt";	
	  }
	  
	
  });	
  
	
}


var toBACK="";

function DAJval(a,b){LINKtxt="URLuser/"+USER+"/"+a+"/"+b;  
MyallBase.child(LINKtxt);
MyallBase.once("value")
  .then(function(snapshot) {
     toBACK = snapshot.val();
	 
	
  });	
  
	return toBACK["URLuser"][USER][a][b];
}





