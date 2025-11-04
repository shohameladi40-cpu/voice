from microbit import *

while True:
    if pins.digital_read_pin(2):  
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        """)
        pause(500)
    else:
        basic.clear_screen()
