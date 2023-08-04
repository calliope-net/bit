input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString(bit.formatNumber(10, bit.eLength.BIN_1111))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(bit.parseint("1010", 2))
})
