function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
    this.toString = () => {
        return this.name + ' ' + this.suit;
    }
}

function deck(){
	this.names = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }
    return cards;
}
//document.getElementById('deck').innerHTML +=
var myDeck = deck();
myDeck.forEach(function(c, i, myDeck) {
    document.getElementById('deck').innerHTML += c.toString();
})