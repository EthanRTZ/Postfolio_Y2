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
});