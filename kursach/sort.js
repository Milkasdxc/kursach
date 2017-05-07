function card(value, name, suit, trump){
	this.value = value;
	this.name = name;
	this.suit = suit;
    this.trump = trump; 
    this.toString = () => {
        return this.name + ' ' + this.suit + ' ' + this.value + ' ' + this.trump;

    }
}

function deck(){
	this.names = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    var ranks = [0, 0, 0, 10, 2, 3, 4, 11];
    var trumpNumber = Math.floor(Math.random() * 4);
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            let rank = ranks[n];
            cards.push( new card( rank, this.names[n], this.suits[s], s === trumpNumber ? true : false ) );
        }
    }
    function compareRandom(a, b){
        return Math.random() - 0.5;
    }
    cards.sort(compareRandom);
    return cards;
}
//document.getElementById('deck').innerHTML +=
var myDeck = deck();
myDeck.forEach(function(c, i, myDeck) {
    document.getElementById('deck').innerHTML += ' ' + c.toString() + '</br>';
})
function players(){
    var bot1 = [];
    var bot2 = [];
    var player= [];
    
        for(var j = 0; j < 6; j++){
            bot1.push(myDeck.pop());
            bot2.push(myDeck.pop());
            player.push(myDeck.pop())   ;
        }
    return {player, bot1, bot2};    
}
console.log(players());