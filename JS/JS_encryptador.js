function Mostrarelementos() {
  document.getElementById("copiar_Btn").style.visibility = "visible";
  document.getElementById("Area_Txt").style.visibility = "visible";
  document.getElementById("Txt_input").focus();
  document.getElementById("munheco_img").style.visibility = "hidden";
  document.getElementById("Text_ingresa").style.visibility = "hidden";
  document.getElementById("Text_ningun").style.visibility = "hidden";
}

function Encriptar() {
  let mensaje = document.getElementById("Txt_input").value.toLowerCase();
  //i es para que afecte tanto mayusculas como minusculas
  //g es para que afecte toda la linea de una oracion
  // m es para que afecte multiples lineas

  //al usar las mismas lineas con replace se hace necesario solo poner el .replace
  if (!mensaje) {
    document.getElementById("Txt_input").classList.add("red");
    alert("Debe de ingresar un texto!");
    document.getElementById("Txt_input").focus();
  } else {
    document.getElementById("Txt_input").classList.remove("red");
    const encriptado = mensaje
      .replace(/e/gim, "enter")
      .replace(/i/gim, "imes")
      .replace(/a/gim, "ai")
      .replace(/o/gim, "ober")
      .replace(/u/gim, "ufat");
    document.getElementById("Area_Txt").textContent = encriptado;

    Mostrarelementos();
  }
}

function Desencriptar() {
  const mensaje = document.getElementById("Txt_input").value.toLowerCase();

  //i es para que afecte tanto mayusculas como minusculas
  //g es para que afecte toda la linea de una oracion
  // m es para que afecte multiples lineas
  const encriptado = mensaje
    .replace(/enter/gim, "e")
    .replace(/imes/gim, "i")
    .replace(/ai/gim, "a")
    .replace(/ober/gim, "o")
    .replace(/ufat/gim, "u");
  document.getElementById("Area_Txt").textContent = encriptado;

  Mostrarelementos();
}

function Copy() {
  let Copia = document.getElementById("Area_Txt");
  Copia.select();
  document.execCommand("copy");
  document.getElementById("Txt_input").focus();
}

const Btn_encriptar = document.getElementById("Encriptador_btn");
Btn_encriptar.onclick = Encriptar;

const Btn_desencriptar = document.getElementById("Desencriptar_btn");
Btn_desencriptar.onclick = Desencriptar;

const Btn_copiar = document.getElementById("copiar_Btn");
Btn_copiar.onclick = Copy;
