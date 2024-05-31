let header_DOM = document.querySelector(".header")

header_DOM.innerHTML = 'Hola! Soy Header.'

document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = `
        <h1>Gramática HTML</h1>
        <a class="github-button" href="https://github.com/NattyKatty/Etiquetas_HTML" target="_blank">GitHub</a>
    `;
});
