let search = document.querySelector('.search-box');
let icon = document.querySelector('#search-icon');
icon.onclick = () =>{
    search.classList.toggle('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});