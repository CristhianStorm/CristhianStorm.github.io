(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme');
  const system = window.matchMedia('(prefers-color-scheme: light)');
  let choice = null;
  try { choice = localStorage.getItem('cs-lab-theme'); } catch {}
  if (choice === 'light' || choice === 'dark') root.dataset.theme = choice;
  const current = () => root.dataset.theme || (system.matches ? 'light' : 'dark');
  const update = () => {
    const next = current() === 'dark' ? 'claro' : 'oscuro';
    button.setAttribute('aria-label', `Cambiar a modo ${next}`);
    button.textContent = `Modo ${next} ◐`;
    document.querySelectorAll('.project-art picture').forEach(picture => {
      const img = picture.querySelector('img');
      const source = picture.querySelector('source');
      const base = img.getAttribute('src').replace(/-(dark|light)\.svg$/, '');
      source.srcset = `${base}-${current()}.svg`;
      source.media = 'all';
      img.src = source.srcset;
    });
  };
  button.addEventListener('click', () => {
    root.dataset.theme = current() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('cs-lab-theme', root.dataset.theme); } catch {}
    update();
  });
  system.addEventListener('change', update);
  update();
})();
