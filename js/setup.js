var sleepTime = 24;

//-----------------------------------------------CORE FUNCTIONS------------------------------------------------

function makeBackground() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//-------------------------------------------------------------------------------------------------------------

function swap(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//-------------------------------------------------------------------------------------------------------------

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//-------------------------------------------------------------------------------------------------------------

async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}
