/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matthew Carnaffan
 * Created on: March 2026
 * This program run the colours of a traffic light over 3 neo pixels.
*/

//creates variables to acess to neostrip
let myStrip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)

//clear leds
basic.clearScreen()
basic.showIcon(IconNames.Happy)
myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

//when a press trafic light runs
input.onButtonPressed(Button.A, function () {
pins.digitalWritePin(DigitalPin.P16, 1)

    //traffic light code for led green
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    pause(2000)

    //traffic light code for led yellow
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pause(3000)

    //traffic light code for led red
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    pause(5000)

    //traffic light code for walk
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    basic.showIcon(IconNames.StickFigure)
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    pause(3000)

    //traffic light code for the end of the cicle
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
})