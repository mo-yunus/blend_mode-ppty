let modeList = [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity'
],
    elem = document.querySelector('.box'),
    modeElem = document.querySelector('.mode-name'),
    duration = 2500;

let i = 0;
let activate = setInterval(function () {
    if (i == modeList.length) i = 0;
    let mode = modeList[i]
    elem.style.mixBlendMode = mode;
    modeElem.innerText = mode;
    i++;
}, duration);

activate();