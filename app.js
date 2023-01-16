const text = document.querySelector('.text');
const bg = document.querySelector('.background');

let load = 0;

// 
let int = setInterval(blurry, 30);

function blurry() {
    load++;
    if(load > 99) {
        clearInterval(int);
    };

    text.innerHTML = load + "%";
    text.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};


const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};