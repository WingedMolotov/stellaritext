var map = [[{"desc" : "a field"}, {"desc" : "the outskirts of Lithwood"}, {"desc" : "the City of Lithwood"}],
           [{"desc" : "a field"}, {"desc" : "a forest"}, {"desc" : "a forest"}],
           [{"desc" : "a swamp"}, {"desc" : "a forest"}, {"desc" : "a forest"}]];
var pos = [0,0];

function gameLoop() {
    console.log(`You are in ${map[pos[0]][pos[1]]["desc"]}.`);
    var uInput = prompt("=> ");
    switch(uInput.toLowerCase()) {
        case "north":
        case "n":
            if(pos[1] > 0) {
                pos[1]--;
            } else {
                console.log("Can't move further!");
            }
            break;
        case "south":
        case "s":
            if(pos[1] < 2) {
                pos[1]++;
            } else {
                console.log("Can't move further!");
            }
            break;
        case "west":
        case "w":
            if(pos[0] > 0) {
                pos[0]--;
            } else {
                console.log("Can't move further!");
            }
            break;
        case "east":
        case "e":
            if(pos[0] < 2) {
                pos[0]++;
            } else {
                console.log("Can't move further!");
            }
            break;
        case "gps":
            console.log(pos);
            break;
        case "help":
            console.log("Figure it out bozo")
        case "map":
            console.log("In the makings\n\n\n\nbozo")
        default:
            console.log(`${uInput} is not recognized as an internal or external program, operable program, or batch file.`);
    }
}

const interval = setInterval(() => gameLoop(), 33);
