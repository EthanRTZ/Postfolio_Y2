document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('site-nav');
  const footerContainer = document.getElementById('site-footer');

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'technique.html', label: 'Technique' },
    { href: 'suivi-de-projet.html', label: 'Suivi de projet' },
    { href: 'integration.html', label: 'Intégration en entreprise' },
  ];

  if (navContainer) {
    navContainer.innerHTML = navItems
      .map((item) => {
        const activeClass = item.href === currentPage ? ' class="active"' : '';
        return `<a href="${item.href}"${activeClass}>${item.label}</a>`;
      })
      .join('');
  }

  if (footerContainer) {
    footerContainer.textContent = 'Portfolio BUT 2 - Ethan Rietz';
  }
});