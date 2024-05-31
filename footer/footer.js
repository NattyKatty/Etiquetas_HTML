let footer_DOM = document.querySelector(".footer")

footer_DOM.innerHTML = 'Hola! Soy Footer!'

document.addEventListener('DOMContentLoaded', function() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = `
        <img src="https://static.wixstatic.com/media/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png/v1/fit/w_2500,h_1330,al_c/d1b317_4fe70cb66f9447c3991ad4cb8d7294d3~mv2.png" alt="Collaborator Image">
        <div class="colaboradoras">
            <p>Colaboradoras:</p>
            <ul>
                <li>Vane - Colaboradora 1</li>
                <li>Miranda - Colaboradora 2</li>
                <li>Natty - Colaboradora 3</li>
            </ul>
        </div>
    `;
});
