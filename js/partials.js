const btnToggle = document.querySelector('.btn-toggle');
const menuResponsive = document.querySelector('.menu-responsive');
const header = document.querySelector('header');


btnToggle.addEventListener('click', () => {
    const iconBar = document.querySelector('.fa-bars');
    const iconCLose = document.querySelector('.fa-xmark');

    if(iconBar.classList.contains('active')){
        iconBar.classList.remove('active')
        iconCLose.classList.add('active')
        menuResponsive.classList.add('show')
        menuResponsive.style.top = `${header.clientHeight}px`
    }else{
        iconBar.classList.add('active')
        iconCLose.classList.remove('active')
        menuResponsive.classList.remove('show')
    }
})
