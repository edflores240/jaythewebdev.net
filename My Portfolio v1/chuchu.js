
window.addEventListener('scroll', function(){

    const scroll = document.querySelector('.circle-divider');
    var value = 1 + window.scrollY/-700;
    scroll.style.transform = `scaleY(${value})`;

    var scrolled = window.pageYOffset;
    var rate = scrolled * -.3;
    var rate2 = scrolled / 500;
    var rate3 = scrolled / 2;

    const target = document.querySelector('.designer');
    const bigCircle = this.document.querySelector('.big-circle');
    const myimge = document.querySelector('.my-image');
    const web = this.document.querySelector('.web');
    const blur = this.document.querySelector('.blur-circle');
    const slogan = this.document.querySelector('.slogan');
    const button = this.document.querySelector('.work-button');
    const logo = this.document.querySelector('.name-logo-wrapper');

    console.log(1 + window.scrollY/-700);




    target.style.transform = 'translate('+rate+'px,'+rate2+'px)'; 
    web.style.transform = 'translate( '+scrolled+'px,'+rate2+'px)'; 
    myimge.style.transform = 'translate('+rate+'px, -100px)';
    slogan.style.transform = 'translate(calc('+scrolled+'px * 2), 0px)'; 
    button.style.transform = 'translate(0px,'+scrolled+'px)'; 
    logo.style.transform = 'translate(0px, calc(-'+scrolled+'px * 2))'; 
    
    




        if (scrolled >= 50){

            target.style.opacity = '0';
            bigCircle.style.scale = '2';
            blur.style.scale = '.5'
            slogan.style.opacity = '0'
            button.style.opacity = '0'
            logo.style.opacity = '-'+rate2+''

        }
        else {
            target.style.opacity = '1';
            bigCircle.style.scale = '1';
            blur.style.scale = '1'
            myimge.style.transform = 'translate(0px, 0px)';
            myimge.style.opacity = '1';
            slogan.style.opacity = '1'
            button.style.opacity = '1'
            logo.style.opacity = '1'

        }
      


})


