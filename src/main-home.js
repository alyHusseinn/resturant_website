
const home = () => {
    // const content = document.querySelector('.content');
    const main = document.createElement('main');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'Egyptian food resturant';
    descrpOpenning.textContent = 'Welcome to our restaurant';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    return main;
}

export default home;