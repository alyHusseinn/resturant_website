
const home = () => {
    // const content = document.querySelector('.content');
    const main = document.createElement('main');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    
    const descrpHeader = document.createElement('h1');
    const descrpOpenning = document.createElement('p');

    descrpHeader.textContent = 'Egyptian food resturants';
    descrpOpenning.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';

    descriptionDiv.appendChild(descrpHeader);
    descriptionDiv.appendChild(descrpOpenning);

    main.appendChild(descriptionDiv);

    return main;
}

export default home;