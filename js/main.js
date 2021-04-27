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

const filterToggle = document.getElementById('filterBtn');
const categoryList = document.getElementById('categoryList');

filterToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterToggle.classList.toggle('filter__spoiler-btn_open');
    categoryList.classList.toggle('category-list_closed');
})