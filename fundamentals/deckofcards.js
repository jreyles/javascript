var Deck = function Deck()
{
    this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    this.cards = [];
    
    for(var s = 0; s < this.suits.length; s++) 
    {
        for(var n = 0; n < this.names.length; n++) {
        this.cards.push(new card (n+1, this.names[n],this.suits[s]));
    }

    //return this.cards;
}


}
function card(value,name,suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
}

var Player = function Player(name,hand)
{
    this.name = name;
    this.hand = []; // push new cards into here...
}

/*
 * var Player = function Player(name,hand)
 *
 *
 * */

Deck.prototype.shuffle = function(){
    for(var j, x, i = this.cards.length; i; j = parseInt(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);

    return this;
}

Deck.prototype.reset = function() {
// reset the deck...
    this.cards = [];
    for(var s = 0; s < this.suits.length; s++){
        for(var n = 0; n < this.names.length; n++) {
            this.cards.push(new card (n+1, this.names[n],this.suits[s]));
    }
}

}

Deck.prototype.deal = function() {
    new_card = this.cards[this.cards.length-1];
    this.cards.pop();
   return new_card; 
}
Player.prototype.deal = function(deck) {
    console.log(deck);
    this.hand.push(deck.deal());    
}

var myDeck = new Deck();
//console.log(myDeck);
myDeck.shuffle();
//console.log(myDeck);
//myDeck.deal();
//myDeck.reset();
var Player1 = new Player("Jack");
Player1.deal(myDeck);
Player1.deal(myDeck);
console.log(Player1.hand);



