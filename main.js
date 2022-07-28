let edad = parseInt(prompt("Ingrese una edad"));

while (edad < 18) {
  alert("Ingreso no autorizado al cine para menores");
  edad = parseInt(prompt("Ingrese una edad valida"));
}

if (edad >= 18) {
  alert("Ingreso al cine autorizado");
}
