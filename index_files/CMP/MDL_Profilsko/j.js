Vue.component("mdlsko_profilka", {
    template: `<div class="modal-content">
    <span class="close">&times;</span>
	
<p> update Status text <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(0);"></i></p>
<input type="text" id="PROFIL_status" style="width: 90%;margin: auto;display: table-caption;" ><br><br>
<div style="text-align: center;">
<p> update PROFIL pic <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(1);"></i><input type="file" value="upload" id="fileButon" style="width: auto;float: right;position: inherit;"></p>
<img id="wew" style="width: auto;max-height: 200px;margin: auto;display:table-caption;border-radius: 50%;">
</div>
<p id="usr_email"></p>
<p> email account  verification status   : <span id="E_status"></span> <button id="re_snd_email">re send email</button></p>
<p> update Update Star <i style="color: cadetblue;font-size: large;" class="fa fa-question-circle" onclick="STAR_info(2);"></i><button type="button"  onclick="BYproces(AKK);" style="width: auto;float: right;position: inherit;">add <i class='fa fa-star'></i></button></p>

<p id="info_star" style="text-align: center;"></p>
	

<button type="button"  onclick="UPD_PROFILO();" style="width: auto;margin: auto;position: inherit;display: table-caption;" >update</button>

  </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"mdlsko_profilka"
}
})   

var signqqee = new Vue({
el:"#Modal_PROFIL",
store: store
})


