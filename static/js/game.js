

    function createCards()
    {
        const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        const titles = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const cards = new Array();

        for (let i = 0 ; i < titles.length; i++)
        {
            for(let j = 0; j < suits.length; j++)
            {
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

        function shuffle(cards)
    {

        for (let i = 0; i < 200; i++)
        {
            let firstCardLocation = Math.floor((Math.random() * cards.length));
            let secondCardLocation = Math.floor((Math.random() * cards.length));
            let temporary = cards[firstCardLocation];

            cards[firstCardLocation] = cards[secondCardLocation];
            cards[secondCardLocation] = temporary;
        }

    }

    const cards=createCards();
    shuffle(cards);
    console.log(cards);
