function ejercicioIF() {
  var sis = Number(document.getElementById("sis").value);
  var dia = Number(document.getElementById("dia").value);
  var texto = "";
  if (sis < 120 && dia < 80) texto = "Normal";
  else if (sis < 130 && dia < 80) texto = "Elevada";
  else if ((sis >= 130 && sis <= 139) || (dia >= 80 && dia <= 89)) texto = "HTA grado 1";
  else if (sis >= 140 || dia >= 90) texto = "HTA grado 2";
  else texto = "Datos inválidos";
  document.getElementById("resIF").textContent = texto;
}

function ejercicioFOR() {
  var entrada = document.getElementById("temps").value;
  var arr = entrada.split(",").map(Number);
  var suma = 0;
  for (var i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  var prom = suma / arr.length;
  document.getElementById("resFOR").textContent = "Promedio: " + prom.toFixed(2);
}

function ejercicioWHILE() {
  var entrada = document.getElementById("fiebre").value;
  var arr = entrada.split(",").map(Number);
  var i = 0, cont = 0;
  while (i < arr.length && arr[i] !== 0) {
    if (arr[i] >= 38) cont++;
    i++;
  }
  document.getElementById("resWHILE").textContent = "Pacientes con fiebre: " + cont;
}

function ejercicioSWITCH() {
  var codigo = Number(document.getElementById("triage").value);
  var cat = "";
  switch (codigo) {
    case 1: cat = "Rojo"; break;
    case 2: cat = "Amarillo"; break;
    case 3: cat = "Verde"; break;
    case 4: cat = "Azul"; break;
    default: cat = "Código inválido";
  }
  document.getElementById("resSWITCH").textContent = cat;
}

function ejercicioDOWHILE() {
  var entrada = document.getElementById("spo2").value;
  var arr = entrada.split(",");
  var i = 0, texto = "";
  do {
    var num = Number(arr[i]);
    if (!isNaN(num)) {
      texto += "SpO2: " + num + "% ";
    }
    i++;
  } while (i < arr.length && arr[i] !== "no");
  document.getElementById("resDO").textContent = texto || "Sin datos.";
}

