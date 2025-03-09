// Funzione per creare un cuore
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posizione orizzontale casuale
    heart.style.left = Math.random() * 100 + 'vw';

    // Durata dell'animazione casuale
    heart.style.animationDuration = Math.random() * 4 + 3 + 's'; // Tra 3 e 7 secondi

    // Dimensione casuale
    const size = Math.random() * 50 + 30; // Tra 20px e 50px
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    // Aggiungi l'SVG del cuore
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg>
    `;

    // Aggiungi il cuore al contenitore
    document.querySelector('.heart-container').appendChild(heart);

    // Rimuovi il cuore dopo che l'animazione è terminata
    setTimeout(() => {
        heart.remove();
    }, 7000); // 7000ms = 7s (durata massima dell'animazione)
}

// Crea cuori ogni 300ms
setInterval(createHeart, 300);