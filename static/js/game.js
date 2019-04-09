function createCardElement (card) {
    const cardElement = document.createElement("div");
    cardElement.id="card";

    const title = document.createElement("div");
    title.setAttribute("class","title");
    title.textContent = card.title;
    cardElement.appendChild(title);


    const image = document.createElement("img");
    image.setAttribute("class","image");
    const img = `static/image/${card.image}.png`;
    image.setAttribute("src" , img);
    cardElement.appendChild(image);

    document.querySelector("#container").appendChild(cardElement);

}
const card = {
    title: "5",
    image: "heart"
};
createCardElement(card);

