basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 1 <= 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (input.acceleration(Dimension.X) > 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # # .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
    }
})
