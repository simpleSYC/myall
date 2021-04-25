$(document).ready(CEKuser,ScrenRedsing);
function CEKuser(){ document.getElementById("demo").innerHTML ="https://mylinks.sytes.net/"+USER;	
MyallBase.child("MYLINKS/"+USER).once("value")
  .then(function(snapshot) { let x=document.getElementById("PRO_STATUS");
    let  PRO = snapshot.val();
 
 if(PRO!=undefined){
 	if( typeof PRO["PROFIL"]["STATUS"]["AKTIV"]  != "boolean"){DEL_NVG();
	x.innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> is alredy suspended</a><br><a>the reason is : "+W["STATUS"]["AKTIV"]+"</a>";

		}else{puniLokalno(PRO); document.getElementsByClassName("containerX")[0].style="opacity:1;";}}

	else{DEL_NVG();
	x.innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://mylinks.sytes.net/'>Create that acc</a>";}
 });}
  

function puniLokalno(W){ Titliranje(location.href.slice(26));
			   let V=W["PROFIL"];
	updZvzda(parseInt(V["RANK"]));
	
document.getElementById("PRO_STATUS").innerHTML=V["STATUS"]["SEY"];
let fotoLINK=V["FOTO"]["Flink"];
 if(fotoLINK){document.getElementById("PROFI_pic").src=fotoLINK;}
         else{document.getElementById("PROFI_pic").src="../img/deflat.png";}



if(V["STATUS"]["AKTIV"]){
	
	
for(i in O_Element){
	for(q in W[i]){
let A=W[i][q]["Aktivno"];
let L=W[i][q]["LINK"];
let T=W[i][q]["TxT"];
let l=PRE_FIX[i][L]+T;
console.log(l);
if(A.toString()=="true"){O_Element[i][q].children[1].setAttribute("GOling",l);
	   if(i=="Activity"){
	   O_Element[i][q].children[2].innerHTML=svg_ASPC["Activity"][0];
	   O_Element[i][q].children[2].children[0].children[0].innerHTML=l;
	   }else{
	   O_Element[i][q].children[2].innerHTML=  svg_ASPC[i][L];}
}  else{ O_Element[i][q].remove();}

}}

}else{
document.getElementsByClassName("outside-layer")[0].remove();
document.getElementsByClassName("middle-layer")[0].remove();}}



function OPND(a){ 
let TxT_lnk=a.getAttribute("GOling");
window.open(TxT_lnk);}


var MDLcontact=document.getElementById("MDL_contact");

function SHWcontact(a){let TXTETO=a.getAttribute("GOling");
MDLcontact.style="display:block;";
MDLcontact.children[0].children[1].innerHTML=TXTETO;}



function DEL_NVG(){
	document.getElementById("PROFI_pic").remove();
	document.getElementById("AJDE").remove();}
	

function ScrenRedsing(){
	if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"
}else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}

}
