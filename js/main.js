const myNav = document.getElementById('navMain');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-scrolling");
    } 
    else {
        myNav.classList.remove("nav-scrolling");
    }
};