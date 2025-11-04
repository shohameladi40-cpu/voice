while (true) {
    if (pins.digitalReadPin(2)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        `)
        pause(500)
    } else {
        basic.clearScreen()
    }
    
}
