const slides = document.querySelectorAll('.slide');
const dotsEl = document.getElementById('dots');
const counterEl = document.getElementById('counter');
const progressEl = document.getElementById('progress');
const N = slides.length;

slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.className = 'dot' + (i === 0 ? ' on' : '');
  b.setAttribute('aria-label', `Slide ${i + 1}`);
  b.onclick = () => slides[i].scrollIntoView({ behavior: 'smooth' });
  dotsEl.appendChild(b);
});
const dots = document.querySelectorAll('.dot');

function setActive(i) {
  dots.forEach((d, j) => d.classList.toggle('on', j === i));
  counterEl.textContent = `${i + 1} / ${N}`;
  progressEl.style.width = `${((i + 1) / N) * 100}%`;
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && e.intersectionRatio >= .5)
      setActive(+e.target.dataset.i);
  });
}, { threshold: .5 });
slides.forEach(s => obs.observe(s));

document.addEventListener('keydown', e => {
  const cur = [...slides].findIndex(s => {
    const r = s.getBoundingClientRect();
    return r.top > -20 && r.top < window.innerHeight * .5;
  });
  if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); slides[Math.min(cur + 1, N - 1)].scrollIntoView({ behavior: 'smooth' }); }
  if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); slides[Math.max(cur - 1, 0)].scrollIntoView({ behavior: 'smooth' }); }
});
