from microbit import *

while True:
    temp = input.temperature()
    if temp >= 30:       
        basic.show_string("HOT")
    else:
        basic.clear_screen()
    pause(500)  
