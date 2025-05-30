const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
});

canvas.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
});
