var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch(cardId) {
	this.setAttribute('src', cards[cardId].cardImage);
	if ((cardsInPlay.length === 2) && (cardsInPlay[0] === cardsInPlay[1])) {
    	alert("You found a match!");
   	} else {
      	alert("Sorry, try again");
   	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);

	checkForMatch.bind(this)(cardId);

	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

};

function createBoard() {
	for (var i = 0; i < cards.length; i += 1) {
		var cardElement = document.createElement('img');

		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
/*
function undoFlipCard() {

}

function resetGame() {
var reset = document.getElementById("reset");

reset.addEventListener('click', undoFlipCard);
}

resetGame();
*/

