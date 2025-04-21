function startProcess() {
    const forms = document.querySelectorAll('.form');

    forms.forEach((form, index) => {
        setTimeout(() => {
            const marmelad = document.createElement('div');
            marmelad.classList.add('marmelad');
            form.appendChild(marmelad);

            // Удаляем мармелад через некоторое время
            setTimeout(() => {                form.removeChild(marmelad);
            }, 2000); // Удаляем через 2 секунды

        }, index * 1000); // Задержка между заливками
    });
}