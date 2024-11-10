const axios = require("axios");
const form = document.querySelector('form');

const titleInput = document.getElementById('title');
const directorInput = document.getElementById('director');
const yearInput = document.getElementById('year');
const durationInput = document.getElementById('duration');
const rateInput = document.getElementById('rate');
const posterInput = document.getElementById('poster');
const genreInputs = document.querySelectorAll('input[name="genre"]');

const resetButton = document.getElementById('resetButton'); 

const isValid = () => {
    let valid = true;
    const errors = [];

    if (!titleInput.value.trim()) {
        valid = false;
        errors.push('El título es obligatorio.');
    }

    if (!directorInput.value.trim()) {
        valid = false;
        errors.push('El director es obligatorio.');
    }

    if (!yearInput.value || isNaN(yearInput.value) || yearInput.value <= 0) {
        valid = false;
        errors.push('El año debe ser un número válido y mayor que 0.');
    }

    if (!durationInput.value.trim()) {
        valid = false;
        errors.push('La duración debe ser un número válido y mayor que 0.');
    }

    if (!rateInput.value || isNaN(rateInput.value) || rateInput.value < 0 || rateInput.value > 10) {
        valid = false;
        errors.push('La calificación debe ser un número entre 0 y 10.');
    }

    if (!posterInput.value.trim()) {
        valid = false;
        errors.push('El póster es obligatorio.');
    }

    const checkedGenres = Array.from(genreInputs).filter(input => input.checked);
    if (checkedGenres.length === 0) {
        valid = false;
        errors.push('Debe seleccionar al menos un género.');
    }

    if (!valid) {
        alert(errors.join('\n'));
    }

    return valid;
};

const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValid()) {
        return; 
    }

    const movie = {
        title: titleInput.value,
        director: directorInput.value,
        year: parseInt(yearInput.value, 10),
        duration: durationInput.value,
        rate: parseFloat(rateInput.value),
        poster: posterInput.value,
        genre: Array.from(genreInputs)
            .filter(input => input.checked)
            .map(input => input.value),
    };

    try {
        await axios.post("http://localhost:3000/movies", movie);
        alert('Película guardada correctamente');
        window.location.reload();
    } catch (error) {
        console.error('Error al guardar la película:', error);
        alert('Error al guardar la película');
    }
};

const handleReset = (event) => {
    event.preventDefault();

    titleInput.value = '';
    directorInput.value = '';
    yearInput.value = '';
    durationInput.value = '';
    rateInput.value = '';
    posterInput.value = '';

    genreInputs.forEach(input => {
        input.checked = false;
    });

};

form.addEventListener('submit', handleSubmit);
resetButton.addEventListener('click', handleReset);
