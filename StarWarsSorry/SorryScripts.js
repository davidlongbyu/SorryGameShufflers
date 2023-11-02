// JavaScript source code

var g_cardList = [];
var images = [];
const remainingCards = "Remaining cards: ";

//Can't remember where I stole this from :(
function loadImages() {
    for (i = 0; i < loadImages.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = loadImages.arguments[i];
    }
}

function newGame() {
    //Reset the card pile image
    document.getElementById("cardPileCard").src = "CardImages/cardPile.png";
    //Reset the cards that are available to be drawn
    resetCardList();
    document.getElementById("remainingCards").innerHTML = remainingCards + g_cardList.length;
}

function resetCardList() {
    //There are indeed 45 cards that can be drawn and 1 appears 5 times
    g_cardList = [
        "cardSorry.png", "cardSorry.png", "cardSorry.png", "cardSorry.png",
        "card-04.png", "card-04.png", "card-04.png", "card-04.png",
        "card01.png", "card01.png", "card01.png", "card01.png", "card01.png",
        "card02.png", "card02.png", "card02.png", "card02.png",
        "card03.png", "card03.png", "card03.png", "card03.png",
        "card05.png", "card05.png", "card05.png", "card05.png",
        "card07.png", "card07.png", "card07.png", "card07.png",
        "card08.png", "card08.png", "card08.png", "card08.png",
        "card10.png", "card10.png", "card10.png", "card10.png",
        "card11.png", "card11.png", "card11.png", "card11.png",
        "card12.png", "card12.png", "card12.png", "card12.png",
    ];
}

function drawCard() {

    //initialize variables
    var arrayItem = -1;  
    var cardDrawn = "";
    var imageSource = "CardImages/";

    //Check whether we have a card array or not and create it if necessary
    if (g_cardList.length == 0) {
        resetCardList();
    }

    //Check whether there is only one card left to be drawn
    if (g_cardList.length == 1) {
        arrayItem = 0;
    } else {
        arrayItem = getRandomIntInclusive(0, g_cardList.length - 1);
    }
    //Capture which card was drawn
    cardDrawn = g_cardList[arrayItem];
    //Remove the card that was drawn from the draw pile (method taken from: https://www.w3schools.com/js/js_array_methods.asp)
    g_cardList.splice(arrayItem, 1);
    //Update how many cards are remaining in the draw pile
    document.getElementById("remainingCards").innerHTML = remainingCards + g_cardList.length;
    //Update the image and fade it in so users know they clicked on the draw pile
    imageSource += cardDrawn;
    document.getElementById("cardPileCard").src = imageSource;
    var el = document.getElementById("cardPileCard");
    fadeIn(el);
}

//From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  //The maximum is inclusive and the minimum is inclusive 
}

/*
Fade in and fade out functions from:
http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
*/

// fade out

function fadeOut(el) {
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

// fade in

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}