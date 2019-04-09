
    var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var cards = new Array();

    function createCardDeck()
    {
        cards = new Array();
        for (var i = 0 ; i < values.length; i++)
        {
            for(var x = 0; x < suits.length; x++)
            {
                var realCardValue = parseInt(values[i]);
                if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                    realCardValue = 10;
                if (values[i] == "A")
                    realCardValue = 11;
                var card = { value: values[i], suit: suits[x], realCardValue: realCardValue };
                cards.push(card);
            }
        }
    }

    createCardDeck()
    console.log(cards)
