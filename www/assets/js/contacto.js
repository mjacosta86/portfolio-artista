// ═══════════════════════════════════════════════════
//  MAYA ARÉVALO — contacto.js
//  En local muestra mensaje de éxito simulado.
//  En Netlify (producción) el envío es nativo.
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    const form      = document.getElementById('contactoForm');
    const success   = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        const isLocal = window.location.hostname === 'localhost' ||
                        window.location.hostname === '127.0.0.1';

        if (isLocal) {
            e.preventDefault();
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            setTimeout(() => {
                form.classList.add('d-none');
                success.classList.remove('d-none');
            }, 800);
        }
    });
});
