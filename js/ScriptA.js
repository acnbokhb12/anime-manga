const logIns = document.querySelectorAll('.js-login');
const modal =document.querySelector('.js-modal');
const modalContainer=document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');
function showPageLogin(){
    modal.classList.add('open');
}
function hidePageLogin(){
    modal.classList.remove('open');
}
for(const logIn of logIns){
    logIn.addEventListener('click',showPageLogin);
}

modalClose.addEventListener('click',hidePageLogin);
modal.addEventListener('click',hidePageLogin);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})


