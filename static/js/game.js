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
    cardElement.id="card";

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

let cards = createCards();
cards = shuffle(cards);
let index = 0;


createCardElement(cards[index], "#dealer-cards");
index ++;
createCardElement(cards[index], "#dealer-cards");
index ++;
createCardElement(cards[index], "#player-cards");
index ++;
createCardElement(cards[index], "#player-cards");
index ++;






