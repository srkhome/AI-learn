(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-mobile-panel]');
  if(btn && panel){
    btn.addEventListener('click', () => panel.classList.toggle('show'));
  }

  // Highlight active anchor on /tools
  const ids = ['chatgpt','dreamface','capcut','kaipai','gemini'];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  const pills = ids.map(id => document.querySelector(`[data-pill="${id}"]`)).filter(Boolean);

  if(sections.length){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          pills.forEach(p => p.classList.remove('active'));
          const pill = document.querySelector(`[data-pill="${e.target.id}"]`);
          if(pill) pill.classList.add('active');
        }
      });
    }, {rootMargin: "-40% 0px -55% 0px", threshold: 0.01});
    sections.forEach(s => obs.observe(s));
  }
})();