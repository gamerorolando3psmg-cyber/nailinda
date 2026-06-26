const slider = document.getElementById("slider");


const images = slider.children;
const firstClone = images[0].cloneNode(true);
const secondClone = images[1].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);


slider.appendChild(firstClone);
slider.appendChild(secondClone);
slider.insertBefore(lastClone, images[0]);

let index = 1;
const ancho = window.innerWidth / 3;


slider.style.transform = `translateX(-${index * ancho}px)`;

function move() {
    index++;

    slider.style.transition = "transform 0.8s ease";
    slider.style.transform = `translateX(-${index * ancho}px)`;

    slider.addEventListener("transitionend", () => {
        const imgs = slider.children;

        
        if (imgs[index].src === firstClone.src) {
            slider.style.transition = "none";
            index = 1;
            slider.style.transform = `translateX(-${index * ancho}px)`;
        }
    });
}

setInterval(move, 1500);