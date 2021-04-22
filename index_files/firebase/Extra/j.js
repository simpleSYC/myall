var FTO_UPLOAD_view=document.getElementById("wew"); var FTO_url=false; var NOVO_FOTO_iME=null;
var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButon");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	
var storageRef= firebase.storage().ref().child("MYLINKS/"+AKK+"/PROFIL_pic/"+file.name);

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

MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/FOTO/Fime").set(file.name);
MyallBase.child("MYLINKS/"+AKK+"/PROFIL/FOTO/Fime").set("ProfilPIC");

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
