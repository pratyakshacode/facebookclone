let icon = document.getElementById('togglePassword');
let password = document.getElementById('pass');

icon.addEventListener('click',(e)=>{
    let p = password.getAttribute('type');
    let classes = icon.getAttribute('class');
    if(classes === 'far fa-eye'){
        icon.setAttribute('class','far fa-eye-slash');

    }
    else if(classes === 'far fa-eye-slash') icon.setAttribute('class','far fa-eye');

    if(p === 'password') password.setAttribute('type','text');
    else if(p === 'text') password.setAttribute('type','password');
    
})