const links = [...document.querySelectorAll('aside a')];
const sections = links.map(link => document.querySelector(link.hash));
function updateChapter(){let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=150)current=section;}links.forEach(link=>{const active=link.hash==='#'+current.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',updateChapter,{passive:true});updateChapter();
