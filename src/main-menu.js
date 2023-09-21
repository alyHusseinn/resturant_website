
const menu = () => {
    const main = document.createElement('main');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'ali ahmed Hussein';
    descrpOpenning.textContent = 'make with Live :)';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    return main;
}

export default menu;