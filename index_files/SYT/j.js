ScrenRedsing();function ScrenRedsing(){
if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;";}
else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;";}}



window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      LOPCI.style="display: none;";}
    
    if (event.target == modal_PROFIL) {modal_PROFIL.style.display = "none";}
  }