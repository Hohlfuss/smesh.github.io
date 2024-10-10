"use strict";
const game = {
    hampaita: 1000000,
    hampaitaPerSekunti: 0,
    trainers: 1,
    randomCost: 10,
};
const fighters = {
    name: [
        "Khabib Nurmagomedov",
        "Georges St-Pierre",
        "Jon Jones"
    ],
    level: [
        0,
        0,
        0
    ],
    rarity: [
        "Legendary",
        "Legendary",
        "Legendary"
    ],
    img: [
        "./khabibNurmagomedov.png",
        "./georgesStPierre.png",
        "./jonJones.png"
    ],
    id: [
        0,
        1,
        2
    ],
    isPurchased: [
        false,
        false,
        false
    ],
    power: [
        0,
        0,
        0
    ],
    currentXp: [
        0,
        0,
        0
    ],
    maxXp: [
        100,
        100,
        100
    ],
    xpStep: [
        10,
        10,
        10
    ],
    progress: [
        0,
        0,
        0
    ]
};
const elements = {
    shopEl: document.getElementById("shop-container"),
    hampaitaEl: document.getElementById("hampaita"),
    fighterContainer: document.getElementById("fighter-container"),
    shopButton: document.getElementById("shop-button"),
    randomButton: document.getElementById("random-button"),
};
function summonFighter(id) {
    const fighter = document.createElement("div");
    const img = document.createElement("img");
    const fighterInfo = document.createElement("div");
    const fighterLevel = document.createElement("div");
    const name = document.createElement("p");
    const power = document.createElement("p");
    fighter.className = "fighter";
    img.className = "img";
    fighterInfo.className = "fighter-info";
    fighterLevel.className = "fighter-level";
    name.className = "name";
    power.className = "power";
    elements.fighterContainer.appendChild(fighter);
    fighter.appendChild(img);
    fighter.appendChild(fighterInfo);
    fighter.appendChild(fighterLevel);
    fighterInfo.appendChild(name);
    fighterInfo.appendChild(power);
    img.src = fighters.img[id];
    name.innerText = fighters.name[id];
    power.innerText = `Power: ${fighters.power[id]}`;
    fighterLevel.innerText = fighters.level[id].toLocaleString();
}
function randomFighter() {
    const randomFighter = Math.floor(Math.random() * fighters.id.length);
    if (fighters.isPurchased[fighters.id[randomFighter]] === true) {
        return;
    }
    else {
        summonFighter(randomFighter);
        fighters.isPurchased[fighters.id[randomFighter]] = true;
    }
}
if (elements.shopEl) {
    elements.shopButton.addEventListener("click", () => {
        if (elements.shopEl.style.display === "flex") {
            elements.shopEl.style.display = "none";
        }
        else {
            elements.shopEl.style.display = "flex";
        }
    });
}
if (elements.randomButton) {
    elements.randomButton.addEventListener("click", () => {
        if (game.hampaita >= game.randomCost) {
            game.hampaita -= game.randomCost;
            game.randomCost *= 2;
            randomFighter();
        }
    });
}
setInterval(() => {
    elements.hampaitaEl.innerText = game.hampaita.toString();
}, 100);
