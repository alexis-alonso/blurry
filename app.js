const text = document.querySelector('.text');
const bg = document.querySelector('.background');

let load = 0;

// the interval is set to perform the callback 'blurry' every 30ms
let int = setInterval(blurry, 30);

function blurry() {
    // increment load by 1 
    load++;

    // when load reaches 100, stop the time (from setInterval) and thus, stop the incrementing
    if(load > 99) {

        // as you'll see down below, blurry() runs until setInterval stops running it (with clearInterval)
        clearInterval(int);
    };

    // the text in the loader is showing the increment of 'load' (it's a string btw)
    text.innerHTML = load + "%";

    // turns the text more transparents until bg is clear, then its gone
    text.style.opacity = scale(load, 0, 100, 1, 0);

    // the actual blur-to-clear effect on the bg
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

// a formula for determining how fast the bg turns clear again (see line 24)
const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};