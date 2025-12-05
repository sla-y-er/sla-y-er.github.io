// small helpers and animation triggers
document.getElementById('year').innerText = new Date().getFullYear();

// mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navRight = document.querySelector('.nav-right');
if (mobileToggle){
  mobileToggle.addEventListener('click', ()=>{
    navRight.classList.toggle('hidden');
  });
}

// reveal animated elements on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(node => observer.observe(node));

// demo wiring for buttons (replace hrefs with your urls)
document.getElementById('download-ext').addEventListener('click', (e)=>{
  e.preventDefault();
  // placeholder: put real zip url or release url
  const url = 'https://github.com/yourusername/mini-chatgpt/archive/refs/heads/main.zip';
  window.open(url, '_blank');
});

document.getElementById('project-demo').addEventListener('click', (e)=>{
  e.preventDefault();
  // open live demo host if you deployed backend; placeholder for now
  alert('Demo not deployed yet — you can host the backend and replace this link.');
});

document.getElementById('project-code').addEventListener('click', (e)=>{
  e.preventDefault();
  window.open('https://github.com/yourusername/mini-chatgpt', '_blank');
});

// simple skill icon animation (pulse on hover handled by CSS)
// allow keyboard accessibility
document.querySelectorAll('.skill').forEach(s=>{
  s.addEventListener('keydown', (ev)=>{
    if (ev.key === 'Enter') s.click();
  });
});
