const header = document.querySelector("#header");
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 30) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});