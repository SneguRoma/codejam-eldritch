  import {
    brownCards,
    blueCards,
    greenCards
  } from './data/mythicCards/index.js';

  import ancientsData from './data/ancients.js';
  /* import difficulties from './data/difficulties.js'; */

  function getRandomNumber(n){
    return Math.floor(Math.random() * n);    
  }

  let green1 = ancientsData[0].firstStage.greenCards;
  let green2 = ancientsData[0].secondStage.greenCards;
  let green3 = ancientsData[0].thirdStage.greenCards;
  let brown1 = ancientsData[0].firstStage.brownCards;
  let brown2 = ancientsData[0].secondStage.brownCards;
  let brown3 = ancientsData[0].thirdStage.brownCards;
  let blue1 = ancientsData[0].firstStage.blueCards;
  let blue2 = ancientsData[0].secondStage.blueCards;
  let blue3 = ancientsData[0].thirdStage.blueCards;

  let sumGreen = green1 + green2 + green3;
  let sumBrown = brown1 + brown2 + brown3;
  let sumBlue = blue1 + blue2 + blue3;
  
  let firstGreen = document.querySelector('.first-green');
  firstGreen.textContent = green1;
  let secGreen = document.querySelector('.sec-green');
  secGreen.textContent = green2;
  let thirdGreen = document.querySelector('.third-green');
  thirdGreen.textContent = green3;
  let firstBrown =document.querySelector('.first-brown');
  firstBrown.textContent = brown1;
  let secBrown = document.querySelector('.sec-brown');
  secBrown.textContent = brown2;
  let thirdBrown = document.querySelector('.third-brown');
  thirdBrown.textContent = brown3;
  let firstBlue =document.querySelector('.first-blue');
  firstBlue.textContent = blue1;
  let secBlue = document.querySelector('.sec-blue');
  secBlue.textContent = blue2;
  let thirdBlue = document.querySelector('.third-blue');
  thirdBlue.textContent = blue3; 



  let firstStageDeck = [];
  let secondStageDeck = [];
  let thirdStageDeck = []; 



  
  function shuffleDeck(){
    const current = document.querySelector('.current-deck');
    current.style.backgroundImage = 'url(/codejam-eldritch/assets/mythicCardBackground.png)'; 


    firstStageDeck = [];
    secondStageDeck = [];
    thirdStageDeck = []; 


    let greenDeck = new Set();
    let blueDeck = new Set();
    let brownDeck = new Set();

    while(greenDeck.size < sumGreen){
      greenDeck.add(greenCards[Math.floor(Math.random() * 18 )]) ;
    }
  
    while(blueDeck.size < sumBlue){
      blueDeck.add(blueCards[Math.floor(Math.random() * 12 )]) ;
    }
  
    while(brownDeck.size < sumBrown){
      brownDeck.add(brownCards[Math.floor(Math.random() * 21 )]) ;
    }

    greenDeck = Array.from(greenDeck);
    brownDeck = Array.from(brownDeck);
    blueDeck = Array.from(blueDeck);

    getCard(ancientsData[0].firstStage.greenCards, firstStageDeck, greenDeck);
    getCard(ancientsData[0].secondStage.greenCards, secondStageDeck, greenDeck);
    getCard(ancientsData[0].thirdStage.greenCards, thirdStageDeck, greenDeck);
    getCard(ancientsData[0].firstStage.brownCards, firstStageDeck, brownDeck);
    getCard(ancientsData[0].secondStage.brownCards, secondStageDeck, brownDeck);
    getCard(ancientsData[0].thirdStage.brownCards, thirdStageDeck, brownDeck);
    getCard(ancientsData[0].firstStage.blueCards, firstStageDeck, blueDeck);
    getCard(ancientsData[0].secondStage.blueCards, secondStageDeck, blueDeck);
    getCard(ancientsData[0].thirdStage.blueCards, thirdStageDeck, blueDeck);   
    
    console.log(firstStageDeck);
    console.log(secondStageDeck);
    console.log(thirdStageDeck);

    const currentCard = document.querySelector('.current-card');
    currentCard.style.backgroundImage = null; 

  }
  

  
  
  
    /* console.log(greenDeck.size === sumGreen);
    console.log(sumGreen);
    console.log(blueDeck.size === sumBlue);
    console.log(sumBlue);
    console.log(brownDeck.size === sumBrown);
    console.log(sumBrown);
 */
    

    

    function getCard(n , arr , arr1){
      for(let i = 0; i < n; i++){
        arr.push(arr1.pop());
      }
    }

    
    

    function getCardClick(){
      let name;
      let name1;
      if(firstStageDeck.length > 0) {
        name1 = firstStageDeck.splice(getRandomNumber(firstStageDeck.length )  , 1)[0];
        if(name1.color === 'brown') {brown1-- ; firstBrown.textContent = brown1;}
          else {if(name1.color === 'green'){ green1-- ; firstGreen.textContent = green1;}
            else { blue1-- ; firstBlue.textContent = blue1;}
          }        
        }
      else {
        if(secondStageDeck.length > 0) {name1 = secondStageDeck.splice(getRandomNumber(secondStageDeck.length )  , 1)[0];
          if(name1.color === 'brown') {brown2-- ; secBrown.textContent = brown2;}
            else {if(name1.color === 'green'){ green2-- ; secGreen.textContent = green2;}
              else { blue2-- ; secBlue.textContent = blue2;} 
            }
          }
        else {
          if(thirdStageDeck.length > 0) {name1 = thirdStageDeck.splice(getRandomNumber(thirdStageDeck.length )  , 1)[0];
            if(name1.color === 'brown') {brown3-- ; thirdBrown.textContent = brown3;}
              else {if(name1.color === 'green'){ green3-- ; thirdGreen.textContent = green3;}
                else { blue3-- ; thirdBlue.textContent = blue3;} 
              }           
          } 
        
          else{
            const currentDeck = document.querySelector('.current-deck');
            currentDeck.style.backgroundImage = null; 
            return;
          }
        }

      }
      name = name1.id;
      
      const currentCard = document.querySelector('.current-card');      
      const img = new Image();
      let link = `./assets/MythicCards/${name}.png`;      
      img.src =  link;
      /* console.log(getLinkToImage()); */
      /* img.onload = () => { */currentCard.style.backgroundImage = `url(${link})`/* }; */    
    console.log(link);     
      
   }

   const nextCard = document.querySelector('.current-deck');
   nextCard.addEventListener('click', getCardClick);

   const shuffle = document.querySelector('.shuffle-deck');
   shuffle.addEventListener('click', shuffleDeck);

   /* getCardClick();
   getCardClick();
   getCardClick();
 */
   

    /* console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());

    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick());
    console.log(getCardClick()); */



