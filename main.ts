/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Sep 2025
 * This program shows the temperature when A button pressed.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// when A button is pressed the temperature will be shown
let temperature:number
 
input.onButtonPressed(Button.A, function() {
    // shows temperature on mircobit
    basic.clearScreen()
    basic.showString('The temperature is ' + input.temperature())
    temperature = input.temperature()
    basic.showNumber(temperature)

    // resets mircobit screen
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
