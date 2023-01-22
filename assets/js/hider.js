const content = document.querySelector("#content-wrapper");

let currentPos = window.pageYOffset;

const callDistort = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.1;

    content.style.transform = "skewY("+speed+"deg)";

    currentPos = newPos;
    requestAnimationFrame(callDistort)
};
callDistort();



// SMOOTH SCROLLER 

// const body = document.body, 
// scrollWrap = document.querySelector("#content-wrapper") [0], 
// height = scrollWrap.getBoundingClientRect().height - 1, 
// speed = 0.04;

// var offset = 0;
// body.style.height = Math.floor(height) + "px";

// function smoothScroll ( ) {
//     offset += (window.pageYOffset - offset) * speed; 
//     var scroll = "translateY(-"+offset+"px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// };

// smoothScroll();


// let scrollbar = window.Scrollbar;
// const options =  {
//     'damping' : .1,
//     'alwaysShowTracks' : true,

// }

// scrollbar.init(document.querySelector('body'));



