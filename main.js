function noScroll() {
    window.scrollTo(0,0);
}

function init() {
    let checkBox = document.getElementById('menu-btn');
    if(checkBox.addEventListener) {
        checkBox.addEventListener("CheckBoxStateChange", checkBoxOnChange, false);
    }
}

function checkBoxOnChange(event) {
    var checkBox = event.target;
    if(checkBox.checked) {
        window.addEventListener('scroll', noScroll)
    }
    else {
        window.removeEventListener('scroll', noScroll);
    }
}