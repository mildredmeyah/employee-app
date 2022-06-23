searchform =document.querySelector('.search-form');

document.querySelector('#search-box').onclick  = () =>{
    searchform.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn')
window.onscroll = () =>{
    searchform.classList.remove('active')
    if (window.scrollY > 80){
    document.querySelector('.header.header2').classList.add('active');
}else{
    document.querySelector('.header2').classList.remove('active');
}
}