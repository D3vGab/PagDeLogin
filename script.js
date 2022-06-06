var email = document.getElementById('email');
var senha = document.getElementById('senha');

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#4A5F6A";
});

senha.addEventListener('focus', ()=>{
    senha.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc"
});

senha.addEventListener('blur', ()=>{
    senha.style.borderColor = "#ccc";
});