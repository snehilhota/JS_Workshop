const boxes = document.querySelectorAll('.box');
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = getRandomColor();
    });
});