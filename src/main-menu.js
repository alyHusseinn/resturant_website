
const menu = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'menu');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'Menu Section';
    descrpOpenning.textContent = 'made with Love :)';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    return main;
}

export default menu;