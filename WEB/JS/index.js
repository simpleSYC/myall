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

function MDL(a){KRUG_O="L"+a;modal.style.display = "block";

let SWLNK= document.getElementById("SHW_link");

let Ra=O_Element[KRUG_o][KRUG_O].getAttribute("Aktivno");
let Rl=O_Element[KRUG_o][KRUG_O].getAttribute("LINK");
let Rt=O_Element[KRUG_o][KRUG_O].getAttribute("TxT");
StalazINDEX=Rl;
let Togel=document.getElementById("StatusLink");
 if(Togel.checked.toString()!=Ra){Togel.parentElement.click();}

if(KRUG_o=="Activity")
    {SWLNK.innerHTML=PRE_FIX[KRUG_o][0] +Rt;}
else{SWLNK.innerHTML=PRE_FIX[KRUG_o][Rl]+Rt;}
SETbLOGO(KRUG_o,Rl);
document.getElementById("LINK_txt").value=Rt;

	  let L=document.getElementsByClassName("LL");
for(i=0;i<L.length;i++){ 	   L[i].style="display:none;";}
for(e in PRE_FIX[KRUG_o]){	   L[e].style="display:block;";
  L[e].innerHTML=PRE_FIX[KRUG_o][e];}  }

function SHW_LinkUPDT(A){let a=A.value;
let b=A.parentElement.parentElement.children[1];
let OKbtn=A.parentElement.children[1].children[0];
if(OKname_1(a)){if(OKbtn.style.display!="block"){OKbtn.style.display="block";}
b.innerHTML=PRE_FIX[KRUG_o][StalazINDEX]+A.value;
}else{if(OKbtn.style.display!="none"){OKbtn.style.display="none";}
b.innerHTML="unsuported Charakter spoted .not allowed(#,$,<'/)";}}


function SETbLOGO(o,O){document.getElementById("Btn_LOGO").innerHTML=svg_ASPC[o][O];}

function par(O){LOPCI.style="display: none;";     StalazINDEX=O;
document.getElementById("SHW_link").innerHTML=PRE_FIX[KRUG_o][O]+document.getElementById("LINK_txt").value;
SETbLOGO(KRUG_o,O);}

					function Closnego(){document.getElementsByClassName("close")[0].click();}
function MESTENJE(){Closnego();
let A=document.getElementById("StatusLink").checked; ST_svg(A);
let L=StalazINDEX;
let T=document.getElementById("LINK_txt").value;
			
O_Element[KRUG_o][KRUG_O].setAttribute("Aktivno",A);
O_Element[KRUG_o][KRUG_O].setAttribute("LINK",L);
O_Element[KRUG_o][KRUG_O].setAttribute("TxT",T);      let O={"Aktivno":A,"LINK":L,"TxT":T};
MyallBase.child("MYLINKS/"+AKK+"/"+KRUG_o+"/"+KRUG_O).set(O);
MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/"+KRUG_o+"/"+KRUG_O).set(O);} 

function STATS(A){let a=A.checked; if(a!=MeM["PROFIL"]["STATUS"]["AKTIV"]){
MeM["PROFIL"]["STATUS"]["AKTIV"]=a;

MyallBase.child("ID/"+SIFRA+"/"+AKK+"/MYLINKS/PROFIL/STATUS/AKTIV").set(a);
MyallBase.child("MYLINKS/"+AKK+"/PROFIL/STATUS/AKTIV").set(a);}}

function GETaccSTATUS(a){if(a!=SW.checked ){SW.click();}}

function ST_svg(a){if(a){
if(KRUG_o=="Activity"){
O_Element[KRUG_o][KRUG_O].children[2].innerHTML=svg_ASPC["Activity"][0];
O_Element[KRUG_o][KRUG_O].children[2].children[0].children[0].innerHTML="https://"+document.getElementById("LINK_txt").value;
	
}else{
O_Element[KRUG_o][KRUG_O].children[0].innerHTML=document.getElementById("SHW_link").innerHTML;
O_Element[KRUG_o][KRUG_O].children[2].innerHTML=svg_ASPC[KRUG_o][StalazINDEX];}

}else{O_Element[KRUG_o][KRUG_O].children[2].innerHTML=svg_ASPC["Activity"][0];}}

function puniLokalno(a){ Titliranje(location.href); MeM=a;
updZvzda(parseInt(a["PROFIL"]["RANK"]));

CHK_vrf(a["PROFIL"]["REG"]["veri"]);

let fotoLINK=a["PROFIL"]["FOTO"]["Flink"];
 if(fotoLINK){
document.getElementById("PROFI_pic").src=fotoLINK;}else{
document.getElementById("PROFI_pic").src="img/deflat.png";}

document.getElementById("wew").src=document.getElementById("PROFI_pic").src;

	
for(i in O_Element){
	for(q in a[i]){
let A=a[i][q]["Aktivno"];
let L=a[i][q]["LINK"];
let T=a[i][q]["TxT"];

O_Element[i][q].setAttribute("Aktivno",A);
O_Element[i][q].setAttribute("LINK",L);
O_Element[i][q].setAttribute("TxT",T);


if(A){if(i=="Activity"){
	O_Element[i][q].children[2].innerHTML=svg_ASPC["Activity"][0];
	O_Element[i][q].children[2].children[0].children[0].innerHTML=PRE_FIX[i][L]+T;
	}else{
	O_Element[i][q].children[2].innerHTML=  svg_ASPC[i][L];}
}else{  O_Element[i][q].children[2].innerHTML=svg_ASPC["Activity"][0];}

}}
GETaccSTATUS(a["PROFIL"]["STATUS"]["AKTIV"]);
document.getElementById("PRO_STATUS").innerHTML=a["PROFIL"]["STATUS"]["SEY"];
document.getElementById("PROFIL_status").value=a["PROFIL"]["STATUS"]["SEY"];

}