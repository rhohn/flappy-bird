function pickObstacleHeight () {
    obstacleHeight = randint(0, 4)
}
function plotCol (colNum: number) {
    for (let index = 0; index <= 4; index++) {
        if (obstacleHeight != index) {
            led.plot(colNum, index)
        }
    }
    basic.pause(500)
    for (let index = 0; index <= 4; index++) {
        led.unplot(colNum, index)
    }
}
input.onButtonPressed(Button.A, function () {
    led.unplot(0, birdHeight)
    birdHeight += 1
    led.plot(0, birdHeight)
})
function playGame () {
    while (true) {
        pickObstacleHeight()
        plotCol(4)
        plotCol(3)
        plotCol(2)
        plotCol(1)
        if (birdHeight == obstacleHeight) {
            plotCol(0)
            score += 1
        } else {
            game.setScore(score)
            game.gameOver()
        }
        for (let index = 0; index <= 4; index++) {
            led.unplot(0, index)
        }
        led.plot(0, birdHeight)
    }
}
input.onButtonPressed(Button.B, function () {
    led.unplot(0, birdHeight)
    birdHeight += -1
    led.plot(0, birdHeight)
})
let score = 0
let obstacleHeight = 0
let birdHeight = 0
game.setScore(0)
birdHeight = 2
led.plot(0, birdHeight)
playGame()
