let Clock = 0
basic.forever(function () {
    if (Clock >= 12) {
        game.addScore(1)
        basic.pause(200)
        Clock = 0
    } else {
        basic.pause(100)
        Clock += 1
    }
})
