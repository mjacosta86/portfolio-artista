// ═══════════════════════════════════════════════════
//  MAYA ARÉVALO — galeria.js
//  Lightbox modal para las páginas de galería
// ═══════════════════════════════════════════════════

function abrirModal(btn) {
    const card = btn.closest('.obra-card');
    const img  = card.querySelector('.obra-img');

    document.getElementById('modalImg').src        = img.src;
    document.getElementById('modalImg').alt        = img.alt;
    document.getElementById('modalTitulo').textContent  = card.dataset.titulo  || '';
    document.getElementById('modalTecnica').textContent = card.dataset.tecnica || '';
    document.getElementById('modalMedidas').textContent = card.dataset.medidas || '';

    // Compatibilidad: data-ano y data-año
    const ano = card.dataset.ano || card.dataset.año || '';
    const elAno = document.getElementById('modalAno') || document.getElementById('modalAño');
    if (elAno) elAno.textContent = ano;

    const modal = new bootstrap.Modal(document.getElementById('obraModal'));
    modal.show();
}
