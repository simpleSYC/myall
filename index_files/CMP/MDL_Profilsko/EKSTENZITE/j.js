Vue.component("ekstenzite", {
    template: `<div id="EkstensionPanel" style="display: grid;">
    
    
<p style="text-align: center;">
<img class="EKX_log" style="width:35px;height:35px;float: left;">
<span  style="position: absolute; margin-top: 9px;margin-left: -24px;">MYLOCAL</span>
<label class="switch SWITCHtabela" style="float:right;">
<input type="checkbox" class="EX_togel" onchange=""/>
<span class="slider round"></span></label>

</p>

<p style="text-align: center;">
<img class="EKX_log" style="width:35px;height:35px;float: left;">
<input type="text" id="txt_contacto" style="text-align: center;width: 60%;margin-left: 3%;margin-top: 3px;" placeholder="Prefix contact"/>
<label class="switch SWITCHtabela" style="float:right;">
<input type="checkbox" class="EX_togel" onchange=""/>
<span class="slider round"></span></label>

</p>

<p style="text-align: center;">
<img class="EKX_log" style="width:35px;height:35px;float: left;"/>
<span style="position: absolute; margin-top: 9px;margin-left: -24px;">verdona</span>
<label class="switch SWITCHtabela" style="float:right;">
<input type="checkbox" class="EX_togel" onchange=""/>
<span class="slider round"></span></label>

</p>



  </div>`})


  
$(document).ready(function(){$("#EkstensionPanel").toggle();
    $("#EditEkstenzite").click(function(){
      $("#EkstensionPanel").toggle();
    });
  });


var storeqqee = new Vuex.Store({
state: {
  view:"ekstenzite"
}
})   

var signqqee = new Vue({
el:"#EKSTENZITE",
store: store
})


