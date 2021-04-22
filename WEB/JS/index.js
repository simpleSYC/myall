function Aktiv(a,n){ let b=a.children[0];
if(!n){ELEmentce=document.getElementById("STatusTxT");}
if(n==1){ELEmentce=document.getElementById("STATS_linkce");}

if(b.checked){
ELEmentce.innerHTML="Akctiv";
ELEmentce.style="color:green;";
a.children[1].style="background-color:#2196F3;";}else{
ELEmentce.style="color:red;";
ELEmentce.innerHTML="Deactiv";
a.children[1].style="background-color:red;";}

if(!n){if(b.checked){GLAVEN_SW=true;}else{GLAVEN_SW=false;}}
}

function MDL_PROFIL(){modal_PROFIL.style.display = "block"; STAR_info("x");}

function UPD_PROFILO(){
// se ubacuvat datada u data baza..
// se updejtnuva datata so LOKALNITE promeni
/// ako se uploadne slika na sajtot i pritisne update , togas da se turi na firabaze
/// ako ne da ne je uploadnuva istata slika
promSTATUS(MeM["PROFIL"]["STATUS"]);
promeniTUKA(MeM["PROFIL"]["FOTO"]["Fime"]);

modal_PROFIL.style.display = "none";}

function promSTATUS(M){let a=document.getElementById("PROFIL_status").value.slice(0,141);
if(a!=M){MeM["PROFIL"]["STATUS"]=a;
document.getElementById("PRO_STATUS").innerHTML=a;

MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/STATUS/SEY").set(a);
MyallBase.child("MYLINKS/"+AKK+"/PROFIL/STATUS/SEY").set(a);}}

function promeniTUKA(M){
if(FTO_url){
if(M!=NOVO_FOTO_iME){MeM["PROFIL"]["FOTO"]["Fime"]=NOVO_FOTO_iME;
document.getElementById("PROFI_pic").src=FTO_url;

MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/FOTO/Flink").set(FTO_url);
MyallBase.child("MYLINKS/"+AKK+"/PROFIL/FOTO/Flink").set(FTO_url);}

}}

function STAR_info(a) {let x = document.getElementById("info_star"); let txt="";
if((x.innerHTML.length<1)&&(a!="x")){
if(a==0){txt="some free welcome text status. 0 -141 character status ";}else
if(a==1){txt="its cirkle picture  200 x 200 PX placeholder with acteable transparent png capability";}else
if(a==2){txt="you can be verifyed<br><a href='https://mylinks.sytes.net/Verification/'>see policy off verification & peyment process</a>";}
}

x.innerHTML=txt;}

function DROPdwnbtn(){if(LOPCI.style.display=="block"){
LOPCI.style="display: none;";}else{LOPCI.style="display:block;";}}

function MDL(b) {R_2="L"+b;parRUB=b;                /// be e id na stalaza
  modal.style.display = "block";
 StalazINDEX=AR[parCAT][b][0][0][1];
if(parCAT!=0){
document.getElementById("SHW_link").innerHTML=DTA[parCAT][StalazINDEX]+AR[parCAT][b][0][1];
}else{
document.getElementById("SHW_link").innerHTML=DTA[parCAT][0]+AR[parCAT][b][0][1];}


document.getElementById("LINK_txt").value=AR[parCAT][b][0][1];


SETbLOGO();

L=document.getElementsByClassName("LL");
for(i=0;i<L.length;i++){
	if(i<DTA[parCAT].length){
	L[i].style="display:block;";
	L[i].innerHTML=DTA[parCAT][i];}
	else{L[i].style="display:none;";}}
}

function SHW_LinkUPDT(A){let a=A.value;
let b=A.parentElement.parentElement.children[1];
let OKbtn=A.parentElement.children[1].children[0];
if(OKname_1(a)){if(OKbtn.style.display!="block"){OKbtn.style.display="block";}
b.innerHTML=DTA[parCAT][StalazINDEX]+A.value;
}else{if(OKbtn.style.display!="none"){OKbtn.style.display="none";}
b.innerHTML="unsuported Charakter spoted .not allowed(#,$,<'/)";}}


function SETbLOGO(){if(parCAT){
document.getElementById("Btn_LOGO").classList=F_Logo[parCAT][StalazINDEX];}else{
document.getElementById("Btn_LOGO").classList=F_Logo[0][0];}}

function par(a){StalazINDEX=a;  LOPCI.style="display: none;";

document.getElementById("SHW_link").innerHTML=DTA[parCAT][StalazINDEX]+document.getElementById("LINK_txt").value;
SETbLOGO();}


function MESTENJE(a,B){
if(B){
STATS_linkce=a.parentElement.parentElement.parentElement.children[2].children[0].children[2].children[0].checked;
LINK_TXT=document.getElementById("LINK_txt").value;
MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/"+R_1+"/"+R_2).set([[STATS_linkce,StalazINDEX],LINK_TXT]);
MyallBase.child("MYLINKS/"+AKK+"/"+R_1+"/"+R_2).set([[STATS_linkce,StalazINDEX],LINK_TXT]);


ST_svg();}

a.parentElement.parentElement.parentElement.children[0].click();} // da closne modale

function STATS(A){let a=A.checked; if(a!=MeM["PROFIL"]["STATUS"]["AKTIV"]){
MeM["PROFIL"]["STATUS"]["AKTIV"]=a;

MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/STATUS/AKTIV").set(a);
MyallBase.child("MYLINKS/"+AKK+"/PROFIL/STATUS/AKTIV").set(a);}}

function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function ST_svg(){ 
if(!parCAT){
	AR[0][parRUB][1].children[2].innerHTML=svg_ASPC[0][0];
	AR[0][parRUB][1].children[2].children[0].children[0].innerHTML="https://"+document.getElementById("LINK_txt").value;
	
}else{
	AR[parCAT][parRUB][1].children[0].innerHTML=document.getElementById("SHW_link").innerHTML;
	AR[parCAT][parRUB][1].children[2].innerHTML=svg_ASPC[parCAT][StalazINDEX];}
}

function puniLokalno(a){ Titliranje(); MeM=a;
updZvzda(parseInt(a["PROFIL"]["RANK"]));

CHK_vrf(a["PROFIL"]["REG"]["veri"]);

let fotoLINK=a["PROFIL"]["FOTO"]["Flink"];
 if(fotoLINK){
document.getElementById("PROFI_pic").src=fotoLINK;}else{
document.getElementById("PROFI_pic").src="img/deflat.png";}

document.getElementById("wew").src=document.getElementById("PROFI_pic").src;

	
for(i=0;i<4;i++){
	for(q=0;q<3;q++){
		AR[i][q][0]=a[proz1[i].toString()][proz2[q].toString()];
	}
}
GETaccSTATUS(a["PROFIL"]["STATUS"]["AKTIV"]);
document.getElementById("PRO_STATUS").innerHTML=a["PROFIL"]["STATUS"]["SEY"];
document.getElementById("PROFIL_status").value=a["PROFIL"]["STATUS"]["SEY"];


for(z=0;z<4;z++){
	for(Z=0;Z<3;Z++){ /// broj na babeelsi
		
		if((AR[z][Z][0][0][0])&&(AR[z][Z][0][0][1]!=-1)){
			if(!z){
			AR[0][Z][1].children[2].innerHTML=svg_ASPC[0][0];
			AR[0][Z][1].children[2].children[0].children[0].innerHTML=DTA[0][0]+AR[0][Z][0][1];
			
			}else{ Q=AR[z][Z][0][0][1];
				AR[z][Z][1].children[2].innerHTML=svg_ASPC[z][Q];
			}
		}
	}
}

}