Vue.component("logerinskoto", {
    template: `<div>
    
   <h3 id="TiTle" style="text-align:center;position: relative;" >Welcome to mylinks </h3>
   <img src="img/MYlinks.png" style="display: block;border-radius:45px;margin-left: auto;margin-right: auto;width: 73%;margin-top:-50px;max-width: 600px;" >
   <p id="ErorTXT" style="color:red;margin: 0px;text-align: center;"></p>
   <div id="Lin">
     <input type="email" placeholder="Email..." id="email_field_1" />
     <input type="password" placeholder="Password..." id="password_field_1" />
    <div>
     <button type="button"  onclick="login();">Login to Account</button> <hr>
     <button type="button"  onclick="SUP(true)">Sing Up</button> 
     <button type="button"  style="position: absolute;z-index: -1;bottom: 0px;left:0px;margin: 10px;width: auto;background-color: cadetblue;color: white;" onclick="window.open('https://1kinger.github.io/web/#s4');">what is mylinks ?</button> <br>
    </div>
   </div>
     
   <div id="Sup" style="display:none;">
    <p id="TitLINK" class="TITlink">https://mylinks.sytes.net/1kinger</p>
     <input type="text" placeholder="1kinger" id="username_field" oninput="Imenik(this.value);" />
       <input type="email" placeholder="Email..." id="email_field_2" oninput="CKMail(this.value);"  />
     <input type="password" placeholder="Password..." id="password_field_2" oninput="PAS_L(this.value);" />
    <div>	
         <button type="button"  onclick="SingUP();">Sing Up</button> <hr>
         <button type="button"  onclick="SUP(false);">back</button> 
   </div>
  </div>

</div>`})
var store="";
var storeqqee = new Vuex.Store({
state: {
  view:"logerinskoto"
}
})   

var signqqee = new Vue({
el:"#login_div",
store: store
})


