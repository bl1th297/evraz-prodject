let arr = ["img/plate.svg", "img/plate-ing-ts.svg","img/plate-mix.svg", "img/plate.svg","img/form.svg", "img/form-sprin-ing.svg", "img/jelly.svg", "img/jelly.svg", "img/marm-ade-bear.svg","img/marm-ade-bear.svg","img/pack-ing.svg", "img/sticker.svg"];
let arrPos = [30, 50,195, 340, 473, 605, 675, 900, 1183, 1355, 1510, 1680, 1840];
let i = 1;

function changeSrc() {
    const img = document.getElementById("image-container");

    // Перемещаем изображение
    img.style.left = arrPos[i] + 'px';

    // После завершения перемещения меняем источник через задержку
    setTimeout(() => {
        img.src = arr[i];
        i++;
        if(i >= arr.length) i=0;
    }, 900); // задержка должна совпадать с продолжительностью transition
}

setInterval(changeSrc, 5000);





const mixerStates = {
    on: {
        imgSrc: "img/venchik.svg",

        spinning: true
    },
    stop: {
        imgSrc: "img/venchik.svg",

        spinning: false
    },
    error: {
        imgSrc: "img/venchik.svg",
        spinning: false
    }
};

const imgElement = document.getElementById('rotating-image');
const indicator = document.getElementById('indicator');

function updateStatus(status) {
    if (imgElement && indicator && mixerStates[status]) {
        // меняем изображение
        imgElement.src = mixerStates[status].imgSrc;
        // обновляем текст статуса


        // управляем классом вращения
        if (mixerStates[status].spinning) {
            imgElement.classList.add('spin');
        }
        else {
            imgElement.classList.remove('spin');
            // сбрасываем трансформ, чтобы не было накопления
            imgElement.style.transform = '';
            // также сбрасываем угол вращения, чтобы при следующем включении было с нуля
            rotationY = 0;
        }
    }
}

function mixer1() {
    updateStatus('on');
}

function mixer2() {
    updateStatus('stop');
}

function mixer3() {
    updateStatus('error');
}

// Изначально устанавливаем состояние по умолчанию
window.onload = () => {
    updateStatus('stop');
}
