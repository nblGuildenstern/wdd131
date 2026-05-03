
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        const body = document.querySelector('body');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';

        const content = document.getElementById('content');
        content.style.borderColor = 'white';
        
        const logo = document.querySelector('img');
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        // code for changes to colors and logo
        const body = document.querySelector('body');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';

        
        const content = document.getElementById('content');
        content.style.borderColor = 'black';

        const logo = document.querySelector('img');
        logo.setAttribute('src', 'images/byui-logo-blue.png');
    }
}           
                    