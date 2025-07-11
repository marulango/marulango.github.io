// peek-a-boo!

const aElems = document.getElementsByTagName('section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const elem = entry.target;
      if (entry.isIntersecting) {
        elem.classList.add('opacity-100');
        elem.classList.remove('opacity-0');
      } else {
        elem.classList.remove('opacity-100');
        elem.classList.add('opacity-0');
      }
    });
  },
  {
    threshold: 0.1
  }
);

// Observe each section individually
Array.from(aElems).forEach(elem => {
  observer.observe(elem);
});


// gradient fun
 const bg = document.getElementById('hero');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fadeStart = 0;
    const fadeEnd = 300;
    const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));

    bg.style.opacity = opacity;
});