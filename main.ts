/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: March 2026
 * This program run the colours of a traffic light over 3 neo pixels.
 */

// creates variables to acess to neostrip
let myStrip: neopixel.Strip = null
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// clear leds
pins.digitalWritePin(DigitalPin.P16, 1)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myStrip.show()

// when a press trafic light runs
input.onButtonPressed(Button.A, function () {
    //traffic light code for led green
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    pause(2000)
    myStrip.show()

    // traffic light code for led yellow
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pause(3000)
    myStrip.show()

    // trafic light code for led red
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    pause(2000)
    myStrip.show()

    // turn off triffic light
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
})
