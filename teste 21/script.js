
document.getElementById('gerar').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value) || 0; // Default to 0 if not provided

    const canvas = document.getElementById('graficoCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.beginPath();
    ctx.moveTo(0, (canvas.height / 2) - (a * 0 + b + c)); // Starting point for the graph
    for (let x = 0; x <= canvas.width; x++) {
        const y = (a * Math.pow(x, 2)) + (b * x) + c;
        ctx.lineTo(x, (canvas.height / 2) - y);
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    const canvas = document.getElementById('graficoCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});
