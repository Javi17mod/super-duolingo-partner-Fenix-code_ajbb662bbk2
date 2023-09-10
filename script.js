document.addEventListener("DOMContentLoaded", function() {
   const closeBtn = document.getElementById("close-btn");
   const popoutOverlay = document.getElementById("popout-overlay");
   const conf = document.getElementById("confirm");
  const text = document.getElementById("timer");
   closeBtn.addEventListener("click", function() {
      popoutOverlay.style.display = "none";
   });
  conf.addEventListener("click", function() {
      window.open("https://www.duolingo.com/classroom/gvaktm")
     var tiempoRestante = 60; // Tiempo restante en segundos

function actualizarTitulo() {
  document.title = "" + tiempoRestante + "s";
  text.textContent = "Tienes " + tiempoRestante + " segundos restantes";
  tiempoRestante--;

  if (tiempoRestante >= 0) {
    setTimeout(actualizarTitulo, 1000); // Esperar 1 segundo antes de actualizar el título nuevamente
  } else {
    window.close(); // Cerrar la página después de 1 minuto
  }
}

setTimeout(actualizarTitulo, 1000);
   });
});
var colors = [ "#00ff59", "#e400f5", "#438bfeff"];
var index = 0;

setInterval(function() {
  var badge = document.getElementById("badge");
  badge.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 10000);
