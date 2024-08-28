const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const homens = document.getElementById('homens').value;
    const mulheres = document.getElementById('mulheres').value;
    const criancas = document.getElementById('criancas').value;

    const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refri = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    result.innerHTML = '';

    const el = document.createElement('p');
    el.innerHTML = `<br><img src="imagens/carne.svg" width="25px" style="vertical-align: middle;"> Carne: ${carne/1000} Kg<br>`;
    el.innerHTML += `<br><img src="imagens/frango.svg" width="25px" style="vertical-align: middle;"> Frango: ${frango/1000} Kg<br>`;
    el.innerHTML += `<br><img src="imagens/linguiça.svg" width="30px" style="vertical-align: middle;"> Linguiça: ${linguica/1000} Kg<br>`;
    el.innerHTML += `<br><img src="imagens/refrigerante.svg" width="12px" style="vertical-align: middle;"> Refrigerante: ${refri/1000} L<br>`;
    el.innerHTML += `<br><img src="imagens/cerveja.svg" width="18px" style="vertical-align: middle;"> Cerveja: ${cerveja/1000} L`;
    result.appendChild(el);
});