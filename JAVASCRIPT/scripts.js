function startAnimation() {
    const box = document.querySelector('.box');
    if (box.style.animationPlayState === 'paused') {
        box.style.animationPlayState = 'running';
    } else {
        box.style.animationPlayState = 'paused';
    }
}
