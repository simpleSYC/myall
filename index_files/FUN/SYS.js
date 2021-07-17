var STATS_linkce, KRUG_o, KRUG_O, StalazINDEX, LINK_TXT, parRUB;
const MYLINKS_URL = "https://mylinks.sytes.net";
var MeM = {};

var ErorINFO = document.getElementById("ErorTXT");
var SW = document.getElementsByClassName("switch")[0].children[0];
var p0, p1, p2;
var Par = [p0, p1, p2];
for (i = 0; i < 3; i++) {
  Par[i] = false;
}

function Imenik(a) {
  let d;
  if (a.length > 0) {
    d = "/";
  } else {
    d = "/1kinger";
  }
  document.getElementById("TitLINK").innerHTML = MYLINKS_URL + d + a;
  if (a.length < 4) {
    ErorINFO.innerHTML = "Username must be longer than 3 charakters";
  } else {
    CEK_singupUSERNAME(a);
  }
}

function ProceduraZamena(A) {
  let R = "";
  for (i in A) {
    if (A[i] == ".") {
      R = R + ",";
    } else {
      R = R + A[i];
    }
  }
  return R;
}

function CKMail(a) {
  if (a.length > 2) {
    Par[1] = false;
    if (OKname(a)) {
      let S = ProceduraZamena(a);
      snd2ckM(S);
    } else {
      ErorINFO.innerHTML = "Unsuported email type";
    }
  } else {
    ErorINFO.innerHTML = "";
  }
}

function snd2ckM(a) {
  MyallBase.child("REG@/email/" + a)
    .once("value")
    .then(function (snapshot) {
      let B_data = snapshot.val();
      if (B_data) {
        MAIL_FREE(false);
      } else {
        MAIL_FREE(true);
      }
    });
}

function CEK_singupUSERNAME(a) {
  Par[0] = false;
  if (OKname(a)) {
    snd2ckU(a);
  } else {
    ErorINFO.innerHTML = "Unsuported character";
  }
}

function snd2ckU(a) {
  MyallBase.child("REG@/user/" + a)
    .once("value")
    .then(function (snapshot) {
      let B_data = snapshot.val();
      if (B_data) {
        USER_FREE(false);
      } else {
        USER_FREE(true);
      }
    });
}

function USER_FREE(a) {
  if (a) {
    ErorINFO.innerHTML = "";
    Par[0] = true;
  } else {
    ErorINFO.innerHTML = "this username is alredy taken";
    Par[0] = false;
  }
}
function MAIL_FREE(a) {
  if (a) {
    ErorINFO.innerHTML = "";
    Par[1] = true;
  } else {
    ErorINFO.innerHTML = "this email is alredy used ";
    Par[1] = false;
  }
}
function PAS_L(a) {
  if (a.length > 7) {
    ErorINFO.innerHTML = "";
    Par[2] = true;
  } else {
    ErorINFO.innerHTML = "pasword must be over 8 charakters";
    Par[2] = false;
  }
}

function PREview(a) {
  window.open(MYLINKS_URL + "/" + a);
}

function BYproces(a) {
  window.open(MYLINKS_URL + "/Payment/#" + a);
}

function OKname(a) {
  if (
    a.includes("/") ||
    a.includes("#") || //(a.includes("."))||
    a.includes(",") ||
    a.includes("`") ||
    a.includes("|") ||
    a.includes("'") ||
    a.includes('"') ||
    a.includes(" ") ||
    a.includes("[") ||
    a.includes("]") ||
    a.includes("%")
  ) {
    return false;
  } else {
    ErorINFO.innerHTML = "";
    return true;
  }
}

function OKname_1(a) {
  if (a.includes("</") || a.includes("#") || a.includes("$")) {
    return false;
  } else {
    return true;
  }
}

function Turi_ACT_email(a, b) {
  document.getElementById("usr_email").innerHTML = "( " + a + " )";
  CHK_vrf(b);
}
function CHK_vrf(a) {
  var user = firebase.auth().currentUser;
  var BTN_ver = document.getElementById("re_snd_email");
  BTN_ver.style = "width: auto;";
  if (a) {
    // da se trgne resend button
    BTN_ver.style.display = "none";
    document.getElementById("E_status").innerHTML = "verifyed";
  } else {
    BTN_ver.style.display = "inline-block";
    BTN_ver.onclick = function () {
      SND_vrf();
      BTN_ver.innerHTML = "email alredy send ..";
      BTN_ver.onclick = function () {};
    };
    BTN_ver.innerHTML = "verification email send ";
    document.getElementById("E_status").innerHTML = "unverified";
  }

  if (user.emailVerified) {
    if (!a) {
      MyallBase.child("ID/" + SIFRA + "/REG/veri").set(true);
    }
  }
}

function ADDni_novUSER(u) {
  let UID = u.uid;
  let EML = u.email;
  let emailStingo = ProceduraZamena(EML);
  let USR_NME = document.getElementById("username_field").value;

  let BLANKO_4_WEB = {
    MYLINKS: {
      Activity: "",
      Contact: "",
      Peyment: "",
      Social: "",
      PROFIL: { FOTO: { Fime: "", Flink: false }, RANK: 0, SETINGS: { MYLOCAL: false, CONTACT: false }, STATUS: { AKTIV: true, SEY: "" }, IME: USR_NME },
    },
    MYLOCAL: {
      JBS: {
        0: { TITLE: false, IMG: { F_ime: false, F_src: false }, JBS_STATUS: false, JBS_DESC: false },
        1: { TITLE: false, IMG: { F_ime: false, F_src: false }, JBS_STATUS: false, JBS_DESC: false },
        2: { TITLE: false, IMG: { F_ime: false, F_src: false }, JBS_STATUS: false, JBS_DESC: false },
        3: { TITLE: false, IMG: { F_ime: false, F_src: false }, JBS_STATUS: false, JBS_DESC: false },
        4: { TITLE: false, IMG: { F_ime: false, F_src: false }, JBS_STATUS: false, JBS_DESC: false },
      },
      PROFIL: {
        G_MAPS: { STATUS: false, Loc: { NAME: false, KOD: false, FULL: false } },
        FOTO: { Fime: "", Flink: false },
        RANK: 0,
        CONTACTO: { MYlinks: false, CONTACT_ME: "" },
        SETINGS: { S1: false },
        STATUS: { AKTIV: false, SEY: "" },
        IME: USR_NME,
      },
    },
  };
  let R = { veri: 0 };
  MyallBase.child("ID/" + UID + "/REG").set(R);
  MyallBase.child("ID/" + UID + "/email").set(EML);
  MyallBase.child("ID/" + UID + "/AKK").set(USR_NME);

  MyallBase.child("ID/" + UID + "/" + USR_NME).set(BLANKO_4_WEB);
  MyallBase.child("MYLINKS/" + USR_NME).set(BLANKO_4_WEB["MYLINKS"]);
  MyallBase.child("MYLOCAL/" + USR_NME).set(BLANKO_4_WEB["MYLOCAL"]);

  MyallBase.child("REG@/email/" + emailStingo).set(true);
  MyallBase.child("REG@/user/" + USR_NME).set(true);

  setTimeout(function () {
    KOJeOVOJ(u);
  }, 1000);
}
