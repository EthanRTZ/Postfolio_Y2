document.addEventListener('DOMContentLoaded', () => {
  const navs = document.querySelectorAll('nav.sub-nav');

  navs.forEach((nav) => {
    const buttons = Array.from(nav.querySelectorAll('[data-target]'));
    const sections = Array.from(document.querySelectorAll('.subpage-content'));

    if (!buttons.length || !sections.length) {
      return;
    }

    const setActive = (targetId) => {
      buttons.forEach((button) => {
        button.classList.toggle('active', button.dataset.target === targetId);
      });

      sections.forEach((section) => {
        section.classList.toggle('active', section.dataset.subpage === targetId);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        setActive(button.dataset.target);
      });
    });

    const initialButton = buttons.find((button) => button.classList.contains('active')) || buttons[0];
    setActive(initialButton.dataset.target);
  });

  const traceImages = document.querySelectorAll('.trace-zone img');

  if (!traceImages.length) {
    return;
  }

  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  overlay.innerHTML = `
    <button type="button" class="image-overlay-close" aria-label="Fermer l'image">×</button>
    <img class="image-overlay-content" alt="Image de trace agrandie">
  `;

  const overlayImage = overlay.querySelector('.image-overlay-content');
  const closeButton = overlay.querySelector('.image-overlay-close');

  const closeOverlay = () => {
    overlay.classList.remove('open');
    document.body.classList.remove('overlay-open');
    overlayImage.removeAttribute('src');
  };

  traceImages.forEach((image) => {
    image.addEventListener('click', () => {
      overlayImage.src = image.src;
      overlayImage.alt = image.alt || 'Image de trace agrandie';
      document.body.classList.add('overlay-open');
      overlay.classList.add('open');
    });
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });

  closeButton.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) {
      closeOverlay();
    }
  });

  document.body.appendChild(overlay);
});