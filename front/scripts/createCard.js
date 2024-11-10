const createCard = (movie) => {
    const card = document.createElement('div');
    card.className = 'card border border-secondary-subtle';
    card.style.width = '10rem';

    const img = document.createElement('img');
    img.src = movie.poster;
    img.className = 'card-img-top';
    img.alt = movie.title;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h6');
    title.className = 'card-text';
    title.textContent = movie.title;

    const details = document.createElement('div');
    details.className = 'card-details';

    const year = document.createElement('p');
    year.innerHTML = `<strong>Año:</strong> ${movie.year}`;

    const director = document.createElement('p');
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

    const duration = document.createElement('p');
    duration.innerHTML = `<strong>Duración:</strong> ${movie.duration}`;

    const genre = document.createElement('p');
    genre.innerHTML = `<strong>Género:</strong> ${movie.genre.join(', ')}`;

    const rate = document.createElement('p');
    rate.innerHTML = `<strong>Puntuación:</strong> ${movie.rate}`;

    details.appendChild(year);
    details.appendChild(director);
    details.appendChild(duration);
    details.appendChild(genre);
    details.appendChild(rate);

    cardBody.appendChild(title);
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(details);

    return card;
}

module.exports = createCard;
