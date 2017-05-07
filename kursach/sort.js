function Card(value, name, suit, trump){
	this.value = value;
	this.name = name;
	this.suit = suit;
    this.trump = trump; 
    this.toString = () => {
        return this.name + ' ' + this.suit + ' ' + this.value + ' ' + this.trump;

    }
}

function genDeck(){
	this.names = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    var ranks = [0, 0, 0, 10, 2, 3, 4, 11];
    var trumpNumber = Math.floor(Math.random() * 4);
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            let rank = ranks[n];
            cards.push( new Card( rank, this.names[n], this.suits[s], false ) );
        }
    }
    function compareRandom(a, b){
        return Math.random() - 0.5;
    }
    cards.sort(compareRandom);
    return cards;
}

function dealing(deck){
    var players = [[],[],[]];
    
    for (let i = 0; i < 6; i++)
    {
        for(var j = 0; j < 3; j++){
            players[j].push(deck.pop());
            //animateCardMoveToPlayer(j);
        }   
    }
    return players;    
}

function trumpingCards(players, trump)
{
    for (let i = 0; i < players.length; i++)
    {
        for (let j = 0; j < players[i].length; j++)
        {
            let current = players[i][j];
            if (current.suit === trump)
            {
                current.trump = true;
                if (current.name === '9')
                    current.value = 14;
                else if (current.name === 'J')
                    current.value = 20;
            }
        }
    }
}

function main(){
    var myDeck = genDeck();
    var players = dealing(myDeck);
    let trumpCard = myDeck.pop();
    trumpingCards(players, trumpCard.suit);
    
}