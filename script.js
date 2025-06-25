// Calcula la fecha que está 884 días en el futuro
const endDate = new Date();
endDate.setDate(endDate.getDate() + 384);

const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const anos = document.getElementById('anos'); // Asegúrate de tener un elemento con id 'anos' en tu HTML
const meses = document.getElementById('meses'); // Asegúrate de tener un elemento con id 'meses' en tu HTML

setInterval(() => {
    const todayDate = new Date();
    const secDiff = Math.floor((endDate.getTime() - todayDate.getTime()) / 1000);
    const years = Math.floor(((secDiff / (60 * 60)) / 24) / 365);
    const months = Math.floor((((secDiff / (60 * 60)) / 24) % 365) / 30);
    const days = Math.floor(((secDiff / (60 * 60)) / 24) % 30);
    const hours = Math.floor((secDiff / (60 * 60)) % 24);
    const minutes = Math.floor((secDiff / 60) % 60);
    const seconds = Math.floor(secDiff % 60);

    anos.innerText = years;
    meses.innerText = months;
    dias.innerText = days;
    horas.innerText = hours;
    minutos.innerText = minutes;
    segundos.innerText = seconds;
}, 1000);
