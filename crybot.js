var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    var sonar = new five.Sonar("A0");

    sonar.on("data", function() {
        if (this.cm > 5) {
            // TODO: cry all the things
        }
    });
});
