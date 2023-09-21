import home from './main-home.js';
import about from './main-about.js';
import menu from './main-menu.js';

const LoadPage = () => {
    const content = document.querySelector('.content');
    
    const header = document.createElement('header');
    let main  = home();
    const footer = document.createElement('footer'); 

    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Egyptian Food';

    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liAbout = document.createElement('li');

    liHome.setAttribute('data-toggle', 'home');
    liMenu.setAttribute('data-toggle', 'menu');
    liAbout.setAttribute('data-toggle', 'about');

    liHome.innerHTML = 'Home';
    liMenu.innerHTML = 'Menu';
    liAbout.innerHTML = 'Content';
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liAbout);


    nav.appendChild(ul);

    header.appendChild(logo);
    header.appendChild(nav);

    const madeBy = document.createElement('p');
    madeBy.textContent = 'Made by Me :)';

    footer.appendChild(madeBy);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

    liAbout.addEventListener('click',() => {
        content.removeChild(main);
        content.removeChild(footer);
        main = about();
        content.appendChild(main);
        content.appendChild(footer);
    });

    liHome.addEventListener('click',() => {
        content.removeChild(main);
        content.removeChild(footer);
        main = home();
        content.appendChild(main);
        content.appendChild(footer);
    });

    liMenu.addEventListener('click',() => {
        content.removeChild(main);
        content.removeChild(footer);
        main = menu();
        content.appendChild(main);
        content.appendChild(footer);
    });
}


export default LoadPage;