var menubtn = document.getElementById("menu-btn");

menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('movile-nav-active');
    this.classList.toggle('fa-xmark')
});

let typed = new Typed('#auto-input',{
    strings : ['Front-End Developer!', 'Web-Designer!', 'Freelancer!'],
    typeSpeed : 90,
    backSpeed : 90,
    delaySpeed : 100,
    loop : true,
});
