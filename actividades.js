document.addEventListener('DOMContentLoaded', function() {
    const scheduleModal = new bootstrap.Modal(document.getElementById('scheduleModal'));
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    
    // Función para generar los botones de horarios
    function generateScheduleButtons() {
        const startHour = 9; // Hora de inicio (9 AM)
        const endHour = 21; // Hora de fin (9 PM)
        const buttonContainer = document.getElementById('scheduleButtons');
        
        buttonContainer.innerHTML = ''; // Limpiar contenido previo
        
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                if (hour === endHour && minute > 0) break;
                
                let time = `${hour}:${minute === 0 ? '00' : '30'}`;
                let button = document.createElement('button');
                button.className = 'btn btn-red btn-col';
                button.textContent = time;
                button.type = 'button';
                button.onclick = function() {
                    // Mostrar el modal de confirmación con el horario seleccionado
                    document.getElementById('selectedTime').textContent = `Se reservó tu lugar a las ${time}hs`;
                    scheduleModal.hide(); // Cerrar el modal de selección de horarios
                    confirmationModal.show(); // Mostrar el modal de confirmación
                };
                buttonContainer.appendChild(button);
            }
        }
    }

    // Inicializar el modal cuando se cargue el documento
    generateScheduleButtons();

    // Configurar el evento de clic en las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            // Mostrar el modal de selección de horarios
            scheduleModal.show();
        });
    });
});

function atras(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    window.location.href = 'menu.html'; // Redirige a la página de registro
}