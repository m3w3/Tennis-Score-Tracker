const e = require('cors');

const io = require('socket.io')(3000, {
    cors: {
        origin: true,
        methods: ['GET', 'PUT', 'POST']
    }
});

const scoring = {
    1: 15, 
    2: 30, 
    3: 40
}

io.on('connection', socket => {
    p1Point = 0
    p2Point = 0
    socket.on('add-point', player => {
        if (player == 1) {
            if (p1Point < 2) { // p1Score is either 0, 15
                p1Point += 1
                io.emit('p1-scored', scoring[p1Point])
            } else if (p1Point == 2) { // p1Score is 30
                if ((p1Point - p2Point) > 0) {
                    io.emit('winner-exists', 'Player 1')
                } 
                p1Point += 1
                io.emit('p1-scored', scoring[p1Point])
            } else { // p1Score is 40 or higher
                if ((p1Point - p2Point) == 1) {
                    io.emit('winner-exists', 'Player 1')
                } else if ((p1Point - p2Point) == 0) {
                    p1Point += 1
                    io.emit('p1-scored', 'ADV')
                } else if ((p1Point - p2Point) == -1) {
                    p1Point += 1
                    io.emit('p1-scored', 40)
                    io.emit('p2-scored', 40)
                } else {
                    io.emit('game-error', 'Please reset the game!')
                }
            }
        }
        if (player == 2) {
            if (p2Point < 2) { // p2Score is either 0, 15
                p2Point += 1
                io.emit('p2-scored', scoring[p2Point])
            } else if (p2Point == 2) { // p2Score is 30
                if ((p2Point - p1Point) > 0) {
                    io.emit('winner-exists', 'Player 2')
                } 
                p2Point += 1
                io.emit('p2-scored', scoring[p2Point])
            } else { // p2Score is 40 or higher
                if ((p2Point - p1Point) == 1) {
                    io.emit('winner-exists', 'Player 2')
                } else if ((p2Point - p1Point) == 0) {
                    p2Point += 1
                    io.emit('p2-scored', 'ADV')
                } else if ((p2Point - p1Point) == -1) {
                    p2Point += 1
                    io.emit('p1-scored', 40)
                    io.emit('p2-scored', 40)
                } else {
                    io.emit('game-error', 'Please reset the game!')
                }
            }
        }
    })
    socket.on('reset', data => {
        p1Point = 0
        p2Point = 0
        io.emit('winner-exists', 'No one... yet')
        io.emit('p1-scored', 0)
        io.emit('p2-scored', 0)

    })
});