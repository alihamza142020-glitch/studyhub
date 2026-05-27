// ─── NAVBAR ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Sticky navbar shadow
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
});

// ─── RENDER NOTE CARD ────────────────────────────────────────
function renderNoteCard(note, clickable = false) {
  const label = subjectLabels[note.subject] || note.subject;
  const onclick = clickable ? `onclick="openNote(${note.id})"` : '';
  return `
    <div class="note-card" ${onclick} style="${clickable ? 'cursor:pointer;' : ''}">
      <span class="note-tag tag-${note.subject}">${label}</span>
      <h3 class="note-title">${note.title}</h3>
      <p  class="note-summary">${note.summary}</p>
      <div class="note-footer">
        <span class="note-read">${note.readTime} read</span>
        ${clickable ? '<span class="note-more">Read more →</span>' : ''}
      </div>
    </div>
  `;
}
