let sonidos = ["boo", "shrek", "madagascar"];

sonidos.forEach((audios) => {

    let boton = document.createElement("button");
    boton.classList.add('btn');

    boton.innerText = audios;

    boton.addEventListener('click', () => {
        detenerSonido();
        document.getElementById(audios).play()
    });

    document.getElementById("buttons").appendChild(boton);

})

function detenerSonido() {
    sonidos.forEach((audios) => {
        let sonido = document.getElementById(audios)
        sonido.pause();
        sonido.currentTime = 0;
    })
}