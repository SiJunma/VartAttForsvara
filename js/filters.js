let dropdownBtnCategory = document.querySelectorAll('#filterCategory .dropdown-container input');
let dropdownBtnPublication = document.querySelectorAll('#filterPublication .dropdown-container input');
let dropdownBtnCentury = document.querySelectorAll('#filterCentury .dropdown-container input');
const filterSection = document.getElementById('filterSection');

let filterSelectedTags = document.querySelector('#filterSelectedTags .filter-selectedtags__list');

function checkListener(arr) {
    if(arr) {
        checkInit(arr);
        arr.forEach((el) => {
            el.addEventListener('input', (evt) => {
                if(evt.target.getAttribute('type') !== 'radio') {
                    if(evt.target.checked) {
                        addTag(evt.target.value, filterSelectedTags);
                    } else {
                        removeTagg(evt.target.value, filterSelectedTags);
                    }
                } else {
                    evt.target.closest('.dropdown').querySelector('.dropbtn').textContent = evt.target.value;
                }
            });
        });
    }
};

function checkInit(arr) {
    arr.forEach((el) => {
        if(el.getAttribute('type') !== 'radio') {
            if(el.checked) {
                addTag(el.value, filterSelectedTags);
            } else {
                removeTagg(el.value, filterSelectedTags);
            }
        } else {
            if(el.checked) {
                el.closest('.dropdown').querySelector('.dropbtn').textContent = el.value;
            }
        }
    });
};

function addTag(tag, tagList) {
    tagList.insertAdjacentHTML('beforeend', `
        <li><button class="filter-selectedtags__btn" type="button" data-name="${tag}">${tag}</button></li>
    `);
    tagListener(tagList);
};

function removeTagg(tag, tagList) {
    if(tagList.querySelector(`.filter-selectedtags__btn[data-name="${tag}"]`)) {
        tagList.querySelector(`.filter-selectedtags__btn[data-name="${tag}"]`).closest('LI').remove();
    }
}

function tagListener(tagList) {
    tagList.querySelectorAll('.filter-selectedtags__btn').forEach((el) => {
        
        el.addEventListener('click', (evt) => {
            let tag = evt.target.getAttribute('data-name');
            evt.target.closest('LI').remove();

            removeCheckedBtn(tag);
        });
    });
};

function removeCheckedBtn(tag) {
    filterSection.querySelectorAll('.dropdown-container input').forEach(el => {
        if(el.value === tag) {
            el.checked = false;
        }
    });
};

checkListener(dropdownBtnCentury);
checkListener(dropdownBtnCategory);
checkListener(dropdownBtnPublication);

tagListener(filterSelectedTags);