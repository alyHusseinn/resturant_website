import home from './main-home.js';
import about from './main-about.js';
import menu from './main-menu.js';

const LoadPage = () => {
    const content = document.querySelector('.content');
    
    const header = document.createElement('header');
    let main  = home();
    const footer = document.createElement('footer'); 

    // header 
    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Egyptian Food';

    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liAbout = document.createElement('li');

    liHome.innerHTML = 'Home';
    liMenu.innerHTML = 'Menu';
    liAbout.innerHTML = 'About';
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liAbout);


    nav.appendChild(ul);

    header.appendChild(logo);
    header.appendChild(nav);

    // footer
    const madeBy = document.createElement('p');
    madeBy.innerHTML = 'Made by <a href="https://github.com/AliHussienabdo"> Me :) </a>';

    footer.appendChild(madeBy);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    // listen for any action in toggles buttons
    liAbout.addEventListener('click', () => refresh(about()));
    liHome.addEventListener('click', () => refresh(home()));
    liMenu.addEventListener('click', () => refresh(menu()));

    function refresh (TheMain) {
        content.removeChild(main);
        content.removeChild(footer);
        main = TheMain;
        content.appendChild(main);
        content.appendChild(footer);
    }
}

export default LoadPage;