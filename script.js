let map = {
    "TestPlanet1": {
        "pos": [2, 2]
    },
    "TestPlanet2": {
        "pos": [0, 0]
    }
};

let pPos = "TestPlanet2";

function gameLoop() {
    console.log(`You are on ${pPos}.`);
    let uInput = prompt("=>  ");
    let arrInput = uInput.split(" ");
    switch(arrInput[0]) {
        case "travel":
            try {
                console.log(`Request: travel ${pPos}-${arrInput[1]}`);
                console.log(`Distance: ${findDist(map[arrInput[1]]["pos"], map[pPos]["pos"]).toFixed(2)} light years`);
            } catch(error) {
                console.log(error);
            } finally {
                break;
            }
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
