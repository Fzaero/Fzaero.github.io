(() => {
  const panel = document.getElementById('news-window');
  const hint = document.getElementById('news-scroll-hint');
  if (!panel || !hint) return;
  const items = Array.from(panel.querySelectorAll('li'));
  if (items.length <= 3) return;

  panel.classList.add('is-scrollable');
  panel.setAttribute('tabindex', '0');
  panel.setAttribute('aria-describedby', 'news-scroll-hint');
  hint.hidden = false;

  function sizeWindow() {
    // Keep the latest three entries fully visible, including wrapped text.
    const height = items[2].getBoundingClientRect().bottom
      - panel.getBoundingClientRect().top + panel.scrollTop + 13;
    panel.style.height = `${Math.ceil(height)}px`;
  }
  sizeWindow();
  window.addEventListener('resize', sizeWindow);
  if (document.fonts) document.fonts.ready.then(sizeWindow);
})();
