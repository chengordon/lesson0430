let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
