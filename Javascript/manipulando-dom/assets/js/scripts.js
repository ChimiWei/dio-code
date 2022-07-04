
const button = document.getElementById('mode-selector');
const h1 =  document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = h1.parentNode.parentNode.children[1];
const darkModeClass = 'dark-mode';

function changeMode() {
    changeClasses();
    changeText();


}

function changeText() {
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return

    }
    
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";

}

function changeClasses(){
    
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}


button.addEventListener('click', changeMode)