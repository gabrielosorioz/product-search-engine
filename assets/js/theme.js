const /** {NodeElement} */ $HTML = document.documentElement;
const /** {Boolean} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const $themeBtnIcon = document.querySelector(".btn__theme-icon");

if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");

} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

changeIconByTheme($HTML.dataset.theme,$themeBtnIcon);


let /** {Booelan} */ isPressed = false;

const changeTheme = function () {
    isPressed = isPressed ? false : true;
    this.setAttribute("aria-pressed", isPressed);
    $HTML.setAttribute("data-theme", ($HTML.dataset.theme === "light") ?
    "dark" : "light");
   

    sessionStorage.setItem("theme", $HTML.dataset.theme);

    changeIconByTheme($HTML.dataset.theme,$themeBtnIcon);

    
}

window.addEventListener("load", function (){
    const /** {NodeElement} */ $themeBtn = document.querySelector(
        "[data-theme-btn]"
    );

    $themeBtn.addEventListener("click", changeTheme);
});



function changeIconByTheme(theme, $nodeElement) {
    
    $nodeElement.classList.add("animated");

    if(theme === "dark") {
        $nodeElement.classList.remove("fa-sun");
        $nodeElement.classList.add("fa-moon");
    } else if(theme === "light") {
        $nodeElement.classList.remove("fa-moon");
        $nodeElement.classList.add("fa-sun");
    }
    
    setTimeout(() => {
        $nodeElement.classList.remove('animated')
    }, 500);

}