(function(){
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));}
const filters=document.querySelectorAll('[data-publication-filter]');const pubs=document.querySelectorAll('[data-pub-category]');filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});const category=b.dataset.publicationFilter;pubs.forEach(p=>p.hidden=category!=='all'&&p.dataset.pubCategory!==category);}));
const input=document.querySelector('[data-resource-search]');if(input){const items=document.querySelectorAll('[data-resource-item]');input.addEventListener('input',()=>{const q=input.value.trim().toLocaleLowerCase();items.forEach(el=>el.hidden=!el.textContent.toLocaleLowerCase().includes(q));});}
})();
