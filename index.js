var drumBtn = document.querySelectorAll("button.drum");

for (var i = 0; i <= drumBtn.length; i++) {
    drumBtn[i].addEventListener("click",
        function () {
            encontraSom(this);
            animaButton(this);
        });

    drumBtn[i].addEventListener("keydown",
        function (event) {
            event.preventDefault();
            const valorTecla = event.key;
            const btn = document.querySelector(`.${valorTecla}`);

            encontraSom(btn);
            animaButton(btn);
        });
}

function encontraSom(event) {
    const classeBtn = event.classList[2];
    const som = `./sounds/${classeBtn}.mp3`;
    const audio = new Audio(som);
    audio.play();
}

function animaButton(event) {
    event.classList.add("pressed");

    setTimeout(function (){
    event.classList.remove("pressed")
    }, 100);
}