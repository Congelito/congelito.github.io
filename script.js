
const vento = document.getElementById("vento");

document.addEventListener("click", function() {
    vento.volume = 0;
    vento.play();

    let volume = 0;

    const fade = setInterval(function() {
        volume += 0.05;
        vento.volume = volume;

        if (volume >= 1) {
            clearInterval(fade);
        }
    }, 50);

}, { once: true });
</script>
