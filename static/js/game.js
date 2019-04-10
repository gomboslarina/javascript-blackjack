function popup() {
    return `<div class="bet_popup">` +
        `<h2>Make your bet</h2>`+
        `<input type='number' id="bet"><br>` +
        `<button id="cancel" class="button">Cancel</button>`+
        `<button id="add_bet" class="button">Bet</button>`+
        `</div>`;
}


function createCards() {

    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const titles = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const cards = new Array();

    for (let i = 0 ; i < titles.length; i++) {

        for(let j = 0; j < suits.length; j++) {
            let value = parseInt(titles[i]);
            if (titles[i] == "J" || titles[i] == "Q" || titles[i] == "K")
                value = 10;
            if (titles[i] == "A")
                value = 11;
            let card = { title: titles[i], suit: suits[j], value: value };
            cards.push(card);
        }
    }
    return cards
}

function shuffle(cards) {

    for (let i = 0; i < 200; i++) {
        let firstCardLocation = Math.floor((Math.random() * cards.length));
        let secondCardLocation = Math.floor((Math.random() * cards.length));
        let temporary = cards[firstCardLocation];

        cards[firstCardLocation] = cards[secondCardLocation];
        cards[secondCardLocation] = temporary;
    }

    return cards
}

function createCardElement (card, field) {
    const cardElement = document.createElement("div");
    cardElement.className="mycard";

    const title = document.createElement("div");
    title.setAttribute("class","title");
    title.textContent = card.title;
    cardElement.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute("class","image");
    const img = `static/image/${card.suit}.png`;
    image.setAttribute("src" , img);
    cardElement.appendChild(image);

    document.querySelector(field).appendChild(cardElement);
}

function createCardElementFold (card) {
    const cardElement = document.createElement("div");
    cardElement.className="first-card";
    const title = document.createElement("div");
    title.setAttribute("class","title");
    title.textContent = card.title;
    title.style.visibility = "hidden";
    cardElement.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute("class","image");
    const img = `static/image/${card.suit}.png`;
    image.setAttribute("src" , img);
    image.style.visibility = "hidden";
    cardElement.appendChild(image);

    document.querySelector("#dealer-cards").appendChild(cardElement);
}


function initGame(cards) {


    createCardElementFold(cards[0]);
    createCardElement(cards[1], "#dealer-cards");

    createCardElement(cards[2], "#player-cards");
    createCardElement(cards[3], "#player-cards");

    const dealerSum = cards[0].value + cards[1].value;
    const playerSum = cards[2].value + cards[3].value;

    document.querySelector(".container").setAttribute("data-player-sum", playerSum);
    document.querySelector(".container").setAttribute("data-dealer-sum",dealerSum);
    document.querySelector(".container").setAttribute("data-index", 4);

}


function main() {
    let cards = createCards();
    cards = shuffle(cards);
    initGame(cards);
    

}

main();






