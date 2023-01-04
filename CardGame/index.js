const cardObjectDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},
];
const cardBackImgPath='/images/card-back-blue.png';
const cardContainerElem = document.querySelector('.card-container')
// 28:48
{/*<div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="/images/card-JackClubs.png" alt="" class="card-img">
                </div>

                <div class="card-back">
                    <img src="/images/card-back-Blue.png" alt="" class="card-img">
                </div>
            </div>
        </div> */}


function createCard(cardItem){
    // create div el
    const cardElem = document.createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    // create front and back card
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    // add class and id to card el
    addClassToElemnt(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add class to inner card elemnt
    addClassToElemnt(cardInnerElem, 'card-inner')

    // add class to front card 
    addClassToElemnt(cardFrontElem, 'card-front')

    // add class to back card
    addClassToElemnt(cardBackElem, 'card-back')

    // add src atr for img
    addSrcToImageElem(cardBackElem, cardBackImgPath)
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    //assign class to back image el of back of card
    addClassToElemnt(cardBackElem,'card-img')
     //assign class to front image el of back of card
     addClassToElemnt(cardFrontElem,'card-img')

     //
     addChildElement(cardFrontElem, cardFrontImg)
     addChildElement(cardBackElem, cardBackImg)

    //  
    addChildElement(cardInnerElem, cardFrontElem)
    addChildElement(cardInnerElem, cardBackElem)

    // 
    addChildElement(cardElem, cardInnerElem)
}

function createElement(elemType){
    return document.createElement(elemType);
}
function addClassToElemnt(elem, className){
    elem.classList.add(className);
}
function addIdToElement(elem, id){
    elem.id = id;
}
function addSrcToImageElem(imgElem, src){
    imgElem.src =src;
}
function addChildElement(parentElem, childElem){
    parentElem.appenChild(childElem)
}
console.log("Hello world");