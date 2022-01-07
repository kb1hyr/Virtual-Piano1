document.addEventListener("keydown", function(event) {
    let whiteKeys = "ASDFGHJasdfghj";
    let blackKeys = "WETYUwetyu";
    let validKeys = whiteKeys + blackKeys;
    if (!validKeys.includes(event.key)) {
        console.log("Invalid key pressed.  Must be one of " + validKeys);
    } else {
        printKey(event.key);
    }
});

function printKey( theKey ) {
    let theLog = "The '"+theKey+"' key is pressed.";
    console.log(theLog);
    playKey(theKey);
}

function playKey( theKey ) {
    let whiteKeys = "ASDFGHJasdfghj";
    let prepend;
    if (whiteKeys.includes(theKey)) {
        prepend = "white_keys/"
    } else {
        prepend = "black_keys/"
    }

    let audio = new Audio(src = prepend +
        theKey.toUpperCase() + ".mp3");
    audio.play();
}
