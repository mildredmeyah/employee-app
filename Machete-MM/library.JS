searchform = document. querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login').onclick = () =>{
    loginForm.classList.toggle('active');
}



window.onscroll =() =>{
    if (window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{

    document.querySelector('.header .header-2').classList.remove('active');


    }
}
window.load =() =>{
    if (window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{

    document.querySelector('.header .header-2').classList.remove('active');


    }
}






