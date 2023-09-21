
const about = () => {
    const main = document.createElement('div');
    main.setAttribute('id', 'about');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'About Section';
    descrpOpenning.textContent = 'made with Love :)';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    return main;
}

export default about;