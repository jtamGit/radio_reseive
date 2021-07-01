radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
})
radio.setGroup(1)
serial.redirectToUSB()
basic.forever(function () {
	
})
