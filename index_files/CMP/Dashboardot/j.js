Vue.component("dsko", {
    template: `<div>
    <h3 id="user_para" style="text-align: center; margin: auto;position: relative;"></h3>

<button type="button"  onclick="PREview(AKK);" style="position: absolute;top: 0px;left: 0px;width: auto;margin: 20px;">prewie</button>
<button type="button"  onclick="MDL_PROFIL();" style="position: absolute;top: 0px;right: 0px;width: auto;margin: 20px;">profil update</button>
<button type="button"  onclick="logout();" style="position: absolute;bottom: 0px;right: 0px;width: auto;margin: 20px;" >Logout</button>

<div style="position: absolute;bottom: 0px;left: 0px;margin: 20px;font-size: x-large;font-weight: bold;">
<span>ACCOUNT STATUS</span><br>
<label class="switch" onclick="Aktiv(this,0);" >
  <input type="checkbox" onchange="STATS(SW);"/>
  <span class="slider round"></span>
</label><br><span id="STatusTxT" style="color:green;">Activ</span></div>

<h2 id="PRO_STATUS"> LOADING........</h2>
</div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"dsko"
}
})   

var signqqee = new Vue({
el:"#DashBoardot",
store: store
})
