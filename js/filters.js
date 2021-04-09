let tags = [];
let years = [];
let publications = [];

const tagsParent = document.getElementById('filterCategory');
const yearsParent = document.getElementById('filterDate');
const publParent = document.getElementById('filterPublication');

if(tagsParent) {
    let tagsBtns = tagsParent.querySelectorAll('.btn-filter');

    for (btn of tagsBtns) {
        tags.push(btn.dataset.tag);
    }
}

if(yearsParent) {
    let yearsBtns = yearsParent.querySelectorAll('.btn-filter');

    for (btn of yearsBtns) {
        years.push(btn.dataset.year);
    }
}

if(publParent) {
    let publBtns = publParent.querySelectorAll('.btn-filter');

    for (btn of publBtns) {
        publications.push(btn.dataset.publication);
    }
}