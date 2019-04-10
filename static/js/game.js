function createCardElement (card) {
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

    document.querySelector("#container").appendChild(cardElement);

}
const card = {
    title: "5",
    suit: "club"
};
createCardElement(card);

