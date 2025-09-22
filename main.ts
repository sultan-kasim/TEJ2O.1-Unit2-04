/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Sep 2025
 * This program shows the temperature when A button pressed
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)


 // When A button is pressed the temperature whill be showm
let temperature: number

input.onButtonPressed(Button.A, function() {
basic.clearScreen()
basic.showString('The temperature is ' + input.temperature())

basic.clearScreen()
basic.pause(1000)
})



