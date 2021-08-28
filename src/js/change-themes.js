import { Theme } from "./cheked";
import refs from "./refs";
const { LIGHT, DARK } = Theme;
const { body, input } = refs;

export default function changeBodyColor() {
    body.classList.toggle( DARK);
    localStorage.setItem('colorTheme',  DARK);
    
    if (body.classList.contains( DARK)) {
        body.classList.remove(LIGHT);
    } else {
        body.classList.add(LIGHT);
        localStorage.setItem('colorTheme', LIGHT);
    }
};

const classBody = localStorage.getItem('colorTheme')
body.classList.add(classBody);

classBody ===  DARK ? input.checked = true : input.checked = false;
    
input.addEventListener('change', changeBodyColor);