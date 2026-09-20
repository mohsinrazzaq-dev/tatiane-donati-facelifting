const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>10));
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open) document.querySelectorAll('details').forEach(x=>{if(x!==d)x.removeAttribute('open')})}));
