var TITLE= document.getElementById("demo"); TITLE.innerHTML ="https://mylinks.sytes.net/"+USER;

function CEKuser(){
MyallBase.child("MYLINKS/"+USER).once("value")
  .then(function(snapshot) {
     W = snapshot.val();
 
 if(W!=undefined){
if((W["PROFIL"]["STATUS"]["AKTIV"]!=true)&&(W["PROFIL"]["STATUS"]["AKTIV"]!=false)){
DEL_NVG();
document.getElementById("PRO_STATUS").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a>is alredy suspended</a><br>";

}else{   puniLokalno(W["PROFIL"]);
document.getElementsByClassName("containerX")[0].style="opacity:1;";}}

else{ DEL_NVG();
document.getElementById("PRO_STATUS").innerHTML="<a>this USERNAME <a/><span>"+USER+"</span><a> still dont exist </a><br><br><a target='_self'    style='font-size: 35px;' href='https://mylinks.sytes.net/'>Create that acc</a>";}
 
  });}
  

function puniLokalno(V){ Titliranje();
	updZvzda(parseInt(V["RANK"]));
	
document.getElementById("PRO_STATUS").innerHTML=V["STATUS"]["SEY"];
fotoLINK=V["FOTO"]["Flink"];
if(fotoLINK){document.getElementById("PROFI_pic").src=fotoLINK;}
else{	     document.getElementById("PROFI_pic").src="../img/deflat.png";}


	

if(V["STATUS"]["AKTIV"]){
for(i=0;i<4;i++){
	for(q=0;q<3;q++){
		AR[i][q][0]=W[proz1[i].toString()][proz2[q].toString()];
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


function OPND(a){ X=AR[parCAT][a][0][0][1];
	TXTETO=DTA[parCAT][X]+AR[parCAT][a][0][1];
	a.target="_blank"; window.open(TXTETO);}


var MDLcontact=document.getElementById("MDL_contact");
function SHWcontact(a){  X=AR[parCAT][a][0][0][1];
	TXTETO=DTA[parCAT][X]+"<br><br>"+AR[parCAT][a][0][1];

MDLcontact.style="display:block;";
MDLcontact.children[0].children[1].innerHTML=TXTETO;}



function DEL_NVG(){
	document.getElementById("PROFI_pic").remove();
	document.getElementById("AJDE").remove();}
	
	
Start();
function Start(){
	CEKuser();

ScrenRedsing();
}

function ScrenRedsing(){
	if(screen.width<400){
document.getElementById("PRO_STATUS").style="font-size:16px;position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"
}else{
document.getElementById("PRO_STATUS").style="position:absolute;z-index:1;display:table-caption;text-align:center;left: 20%;width:60%;"}

}





