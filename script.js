let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${offset})`;
}

setInterval(showNextSlide, 3000);
document.addEventListener('DOMContentLoaded', () => {
    const emojis = [ '🌸', '🌼', '💖', '🫶', '🤍',  '💘'];
    const numberOfEmojis = 40; // Rastgele emoji sayısı

    for (let i = 0; i < numberOfEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Rastgele pozisyon
        const side = Math.random() > 0.5 ? 'left' : 'right';
        emoji.style[side] = `-${Math.random() * 20}px`; // Kenar boşluğu
        emoji.style.top = `${Math.random() * 100}vh`;
        
        // Rastgele dönüş açısı
        emoji.style.transform = `rotate(${Math.random() * 360}deg)`;

        // Kenar konumunu ayarlamak için
        if (side === 'left') {
            emoji.style.left = `${Math.random() * 20}vh`; // Sol kenarda
        } else {
            emoji.style.right = `${Math.random() * 20}vh`; // Sağ kenarda
        }

        document.body.appendChild(emoji);
    }
});
const music = document.getElementById('myMusic');

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}
