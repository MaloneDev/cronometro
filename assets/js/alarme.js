
//alarme();

let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;

acoesBotoes();

function acoesBotoes(){

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('btnIniciar').addEventListener('click', iniciarCronometro);
});document.getElementById('btnPausar').addEventListener('click', pausarCronometro);
document.getElementById('btnParar').addEventListener('click', pararCronometro);
}


function alarme() {
    console.log("entrou aqui ");
  var display = document.getElementById("display");

  var minutos = document.getElementById("minutos");
  var segundos = document.getElementById("segundos");

  var comecar = document.getElementById("comecar");

  var cronometroSeg;

  var minutoAtual;
  var segundoAtual;

  var interval;

  for (var i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="' + i + '">' + i + "</option>";
  }

  for (var i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value="' + i + '">' + i + "</option>";
  }

  comecar.addEventListener("click", function () {
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function () {
      segundoAtual--
      if (segundoAtual <= 0) {
        if (minutoAtual > 0) {
          minutoAtual--;
          segundoAtual = 59;
        } else {
          alert("Acabou!");
          document.getElementById("sound").play();
          clearInterval(interval);
        }
      }

      display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    }, 1000);
  });
}
function iniciarCronometro() {
  clearInterval(cronometro);
  cronometro = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
    document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
  }, 1000);
  relogio(horas, minutos, segundos);
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function pararCronometro() {
    clearInterval(cronometro);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('segundos').textContent = '00';
    document.getElementById('minutos').textContent = '00';
    document.getElementById('horas').textContent = '00';
}

function relogio(horas, minutos, segundos) {
    
    
    const relogio = setInterval(function time() {
        let dateToday = new Date();
        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let s = dateToday.getSeconds();
    
        if (hr < 10) hr = '0' + hr;
    
        if (min < 10) min = '0' + min;
    
        if (s < 10) s = '0' + s;
    
        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = s;
    
    })
}