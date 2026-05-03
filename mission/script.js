
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        const body = document.querySelector('body');
        body.classList.add('dark');

        const content = document.getElementById('content');
        content.style.borderColor = 'white';

        const h3 = document.querySelector('h3');
        h3.style.color = `rgb(147, 178, 236)`;
        
        const logo = document.querySelector('img');
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        const body = document.querySelector('body');
        body.classList.remove('dark');
        
        const content = document.getElementById('content');
        content.style.borderColor = 'black';
        
        const h3 = document.querySelector('h3');
        h3.style.color = `rgb(5, 69, 187)`;

        const logo = document.querySelector('img');
        logo.setAttribute('src', 'images/byui-logo-blue.png');
    }
}           
                    