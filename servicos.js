// Executa imediatamente após injetar via fetch
setTimeout(iniciarServicos, 50);

function iniciarServicos() {

    const track = document.getElementById("track");
    if (!track) return;

    const cards = document.querySelectorAll(".plano-card");
    const total = cards.length;

    let index = 0;

    function mover() {

        index++;

        if (index >= total) {
            index = 0;
        }

        const largura = cards[0].offsetWidth + 15; // largura + margem
        track.style.transform = `translateX(-${index * largura}px)`;
    }

    setInterval(mover, 2500);
}
