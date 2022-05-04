let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("dato1");
let rotulo2 = document.getElementById("dato2");

rotulo1.innerHTML = "Indique la base del rectangulo:";
btnDatos1.addEventListener("click", () => {
  console.log("la base ingresada es:", +dato1.value);
});

rotulo2.innerHTML = "Indique la altura del rectangulo:";
btnDatos2.addEventListener("click", () => {
  console.log("la altura ingresada es:", +dato2.value);
});

resultado.addEventListener("click", () => {
  console.log("el area es:", +dato2.value * dato1.value);
});
