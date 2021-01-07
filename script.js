const socket = io('http://localhost:3000');
// folowing are displays
const p1Score = document.getElementById('p1-score');
const p2Score = document.getElementById('p2-score');
const winner = document.getElementById('winner');
// following are inputs
const p1Point = document.getElementById('p1-point');
const p2Point = document.getElementById('p2-point');
const reset = document.getElementById('reset');

socket.on('p1-scored', data => {
    p1Score.innerText = data
});

socket.on('p2-scored', data => {
    p2Score.innerHTML = data
});

socket.on('winner-exists', data => {
    winner.innerHTML = data
});

socket.on('game-error', data => {
    window.alert(data)
});

p1Point.addEventListener('click', e => {
    e.preventDefault()
    socket.emit('add-point', 1)
})

p2Point.addEventListener('click', e => {
    e.preventDefault()
    socket.emit('add-point', 2)
})

reset.addEventListener('click', e => {
    e.preventDefault()
    socket.emit('reset')
})