function Precek(a){let R=null;
if(a.includes("#")){location.href="#footer";R=a.slice(40);
if((R)&&(R!="footer")){document.getElementById("BYSKO").setAttribute("user",R);}}}

Precek(location.href);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


function copyToClipboard(a){a.style.backgroundColor="aquamarine";
const t=document.getElementsByTagName("XMP")[0].innerText;
const el =document.createElement('textarea');
el.value =t;
el.setAttribute('readonly', '');
el.style.position = 'absolute';
el.style.left = '-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);}


function peyProcedura(a){document.getElementById("Peysko").style.display="block";
let A=a.getAttribute("user");
 if(A){description.value=A;}
  else{description.value=null;}

            amount.value=null;}

function ClinskoMDL_pyOrdero(){
document.getElementById("Peysko").style.display="none";}





function initPayPalButton() {
  var description = document.querySelector('#smart-button-container #description');
  var amount = document.querySelector('#smart-button-container #amount');
  var descriptionError = document.querySelector('#smart-button-container #descriptionError');
  var priceError = document.querySelector('#smart-button-container #priceLabelError');
  var invoiceid = document.querySelector('#smart-button-container #invoiceid');
  var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
  var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

  var elArr = [description, amount];

  if (invoiceidDiv.firstChild.innerHTML.length > 1) {
    invoiceidDiv.style.display = "block";
  }

  var purchase_units = [];
  purchase_units[0] = {};
  purchase_units[0].amount = {};

  function validate(event) {
    return event.value.length > 0;
  }

  paypal.Buttons({
    style: {
      color: 'white',
      shape: 'pill',
      label: 'paypal',
      layout: 'vertical',
      
    },

    onInit: function (data, actions) {
      actions.disable();

      if(invoiceidDiv.style.display === "block") {
        elArr.push(invoiceid);
      }

      elArr.forEach(function (item) {
        item.addEventListener('keyup', function (event) {
          var result = elArr.every(validate);
          if (result) {
            actions.enable();
          } else {
            actions.disable();
          }
        });
      });
    },

    onClick: function () {
      if (description.value.length < 1) {
        descriptionError.style.visibility = "visible";
      } else {
        descriptionError.style.visibility = "hidden";
      }

      if (amount.value.length < 1) {
        priceError.style.visibility = "visible";
      } else {
        priceError.style.visibility = "hidden";
      }

      if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
        invoiceidError.style.visibility = "visible";
      } else {
        invoiceidError.style.visibility = "hidden";
      }

      purchase_units[0].description = description.value;
      purchase_units[0].amount.value = amount.value;

      if(invoiceid.value !== '') {
        purchase_units[0].invoice_id = invoiceid.value;
      }
    },

    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: purchase_units,
      });
    },

    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {ClinskoMDL_pyOrdero();
        alert('Transaction completed by ' + details.payer.name.given_name + '!');
        OpenSuccsesfulPeyment(description,amount);
      });
    },

    onError: function (err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();




const PYMNT_WB="https://peyment-status.web.app/#";
function OpenSuccsesfulPeyment(a,b){let AB="$"+a.value+":"+b.value;
document.getElementById("amount").value="";
document.getElementById("description").value="";
let F=document.getElementById("Gg_ordero");F.style.display="block";
let f=document.getElementById("G_G_odredo");
f.innerHTML="<iframe src='"+PYMNT_WB+AB+"' style='border-radius: 12px;'></iframe>";}


