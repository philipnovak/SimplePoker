var ranks = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

// Represents a single card
function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
	this.holder = 0; // who is holding the card
}

// Represents the entire deck, with cards[] holding each Card()
function Deck() {
	this.cards = [];
	// Create each card with a unique rank/suit pair
	for(var i = 0; i < ranks.length; i++) {
		for(var j = 0; j < suits.length; j++) {
			var card = new Card(ranks[i], suits[j]);
			this.cards.push(card);
		}
	}
	// The index of the next card in the deck
	this.topcard = 0;

	// This should be called every time a card is moved
	this.setHolder = function(cardID, holder) {
		if(this.cards[cardID].holder == 0 && holder != 0) {
			this.topcard++;
		}
		this.cards[cardID].holder = holder;
	}

	// Fancy deck suffle
	this.shuffle = function() {
		// shout out to "Jeff" on stackoverflow for this bit
		for(var x, y, i = this.cards.length; i; x = Math.floor(Math.random() * i), y = this.cards[--i], this.cards[i] = this.cards[x], this.cards[x] = y, this.cards[i].holder = 0);
		this.topcard = 0;
	}
}