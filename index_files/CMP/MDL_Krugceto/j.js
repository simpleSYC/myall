Vue.component("mdl_krugceto", {
    template: `<div class="modal-content">
      <span class="close">&times;</span>
      <p id="SHW_link"></p>
    
  <div class="topnav" id="myTopnav">
  
  <div style="float: left;text-align: center;">
    <span id="STATS_linkce" style="color:green;">Activ</span><br>
  <label class="switch" onclick="Aktiv(this,1);" >
    <input type="checkbox" id="StatusLink">
    <span class="slider round"></span>
  </label></div>
  
  
    <div class="dropdown" id="MENIlink">
      <button type="button"  class="dropbtn" onclick="DROPdwnbtn();" >Options 
        <i class="fa fa-caret-down"></i>
      </button>
      <div id="Lopci" class="dropdown-content" >
        <a onclick="par(0);" class="LL"></a>
        <a onclick="par(1);" class="LL"></a>
        <a onclick="par(2);" class="LL"></a>
        <a onclick="par(3);" class="LL"></a>
        <a onclick="par(4);" class="LL"></a>
        <a onclick="par(5);" class="LL"></a>
      </div>
    </div> 
    
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" style="float: right;width:55px">
  <circle class="Oval-2-Copy-12" cx="48" cy="48" r="48" style="fill:#5d8ffc;opacity:0.4;" fill="#00F7FF" opacity=".6"/>
  <g id="Btn_LOGO" ></g>

    
    </svg>
    
  </div> <br>
  
  <div> 
  
    <input style="width:100%;" type="text" id="LINK_txt"  oninput="SHW_LinkUPDT(this);" name="Name" required>
    <div style="display: block ruby;">
      <button type="button" onclick="MESTENJE();" style="float:left;width: auto;margin: 10px;" >Save</button>
      <button type="button" onclick="Closnego()"  style="float:right;width: auto;margin: 10px;" >Cancel</button>
    </div>
    
     </div>
    </div>`})

var storeqqee = new Vuex.Store({
state: {
  view:"mdl_krugceto"
}
})   

var signqqee = new Vue({
el:"#myModal",
store: store
})


