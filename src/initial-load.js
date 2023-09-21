
const LoadPage = () => {
    const content = document.querySelector('.content');

    const header = document.createElement('header');

    const nav = document.createElement('nav');
    const logo = document.createElement('h1');
    logo.textContent = 'Egyptian Food';

    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liContact = document.createElement('li');
    liHome.innerHTML = 'Home';
    liMenu.innerHTML = 'Menu';
    liContact.innerHTML = 'Content';
    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);


    nav.appendChild(ul);

    header.appendChild(logo);
    header.appendChild(nav);


    const main = document.createElement('main');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');

    // MainImage.src = './imgs/egyFood2.jpg';
    // MainImage.style.cssText = 'height: 300px; width: 300px';
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'Egyptian food resturants';
    descrpOpenning.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    const footer = document.createElement('footer');

    const madeBy = document.createElement('p');
    madeBy.textContent = 'Made by Me :)';

    footer.appendChild(madeBy);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}


export default LoadPage;