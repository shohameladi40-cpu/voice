let temp: number;
while (true) {
    temp = input.temperature()
    if (temp >= 30) {
        basic.showString("HOT")
    } else {
        basic.clearScreen()
    }
    
    pause(500)
}
