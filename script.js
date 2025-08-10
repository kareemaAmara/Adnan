const balloonContainer = document.querySelector('.balloons');
const typedTextElement = document.getElementById('typed-text');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const colors = ['#ff4b5c', '#ffcd3c', '#4cb5f5', '#7ed957', '#ff66b3', '#ff914d'];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * window.innerWidth + 'px';

    let animationDuration = Math.random() * 5 + 5;
    balloon.style.animation = `float ${animationDuration}s linear forwards`;

    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, animationDuration * 1000);
}


const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% { transform: translateY(100vh); opacity: 1; }
    100% { transform: translateY(-150px); opacity: 0; }
}`;
document.head.appendChild(style);


setInterval(createBalloon, 500);


const text = "Happy Birthday";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();
