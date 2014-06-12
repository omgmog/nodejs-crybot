var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function () {
    var photoresistor = new five.Sensor({
        pin: "A0",
        freq: 250
    });
    var led = new five.Led(11);

    board.repl.inject({
        pot: photoresistor
    });

    photoresistor.on("data", function () {
        console.log('Brightness:', this.value);
        if (this.value > 15) {
            led.on();
        } else {
            led.off();
        }
    });
});
