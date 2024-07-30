function success2(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Excelente trabajo!👌🏼",
        text: "Se que puedes dar aun mas.",
        showConfirmButton: false,
        timer: 1500
      });
}
  
function success3(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Cada vez mas fuerte!👌🏼",
        text: "La meta esta cada vez mas cerca",
        showConfirmButton: false,
        timer: 1500
      });
}
  
function success(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Ejercicio realizado!💪🏻",
        text: "Continua progresando asi.",
        showConfirmButton: false,
        timer: 1500
      });
}

function saveProgress(){
  Swal.fire({
    title: "Deseas guardar el Progreso de hoy?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Si!",
    denyButtonText: `No guardar`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Excelente!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Cambios descartados", "", "info");
    }
  });
}

