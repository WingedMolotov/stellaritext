let map = {
    "Base": {
        "pos": [0, 0]
    },
    "Relagath": {
        "pos": [2, 2]
    }
};

let pPos = "Base";

function gameLoop() {
    console.log(`You are on ${pPos}.`);
    let uInput = prompt("=>  ");
    let arrInput = uInput.split(" ");
    switch(arrInput[0].toLowerCase()) {
        case "travel":
            try {
                let newLoc = arrInput[1]
                let dist = findDist(map[newLoc]["pos"], map[pPos]["pos"]).toFixed(2);
                console.log(`Request: travel ${pPos}-${newLoc}`);
                console.log(`Distance: ${dist} light years`);
                console.log(`Status: Arrived at ${newLoc}`);
                pPos = newLoc;
            } catch(error) {
                console.log("Error: Request invalid");
            } finally {
                break;
            }
        default:
            console.log("Error: Request invalid");
    }
}

function findDist(alpha, beta) {
    let x1 = alpha[0];
    let y1 = alpha[1];
    let x2 = beta[0];
    let y2 = beta[1];
    return Math.sqrt((x2-x1)**2+(y2-y1)**2);
}

setInterval(() => gameLoop(), 33);
