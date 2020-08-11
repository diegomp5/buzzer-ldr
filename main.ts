input.onButtonPressed(Button.A, function () {
    turefalse = false
    lightlev = 0
})
function alarm () {
    music.playTone(262, music.beat(BeatFraction.Double))
    images.createImage(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `).showImage(0)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    turefalse = true
    lightlev = input.lightLevel()
    if (lightlev > 20) {
        while (turefalse) {
            alarm()
        }
    }
})
let turefalse = false
let lightlev = 0
lightlev = input.lightLevel()
turefalse = true
if (lightlev > 20) {
    while (turefalse) {
        alarm()
    }
}
basic.forever(function () {
	
})
