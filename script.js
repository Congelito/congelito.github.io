const vento = document.getElementById("vento");

document.addEventListener("click", function() {
    vento.volume = 0;

    vento.play().then(() => {
        let volume = 0;
        const fade = setInterval(function() {
            volume += 0.05;
            vento.volume = Math.min(volume, 1);
            if (volume >= 1) clearInterval(fade);
        }, 50);
    }).catch((err) => {
        console.error("Falha ao tocar o áudio:", err.message);
    });

}, { once: true });
