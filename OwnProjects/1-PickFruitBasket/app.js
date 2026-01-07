//Variables
const marketList = document.querySelector('#market-list');
let arrayFruits = [];
const basketItemsHTML = document.querySelector('#basket-items');
const clearAllBtn = document.querySelector('#clear-all');


eventsRegistration();

//Events
function eventsRegistration() {
   
   //Select Fruit of market
   marketList.addEventListener('click', selectFruits);

   //Remove fruit using X button
   basketItemsHTML.addEventListener('click', removeFruit);

   //Remove everything of the list
   clearAllBtn.addEventListener('click', () => {
      
      arrayFruits = [];

      fruitsHTML();

   })

}

//Functions

function selectFruits(e) {
   
   if(e.target.classList.contains('add-btn')){

       const fruitChoose = e.target.parentElement;

       readFruit(fruitChoose);

    }

}

function readFruit(fruit){
  
   //Create an object with the fruits

   const objFruits = {

      nameFruit: fruit.querySelector('span').textContent,
      idFruit: fruit.getAttribute('data-id'),
      quantity: 1

   }

   //Increase their quantity if the element exist
   const fruits = arrayFruits.some( fruit => fruit.idFruit === objFruits.idFruit);

   if(fruits){

      arrayFruits = arrayFruits.map( fruit => {
       
          if(fruit.idFruit === objFruits.idFruit){

               fruit.quantity ++;
               return fruit;
          }else{

            return fruit;
          }

      })
     
      

   }else{
     

      //Add fruit object to array
      arrayFruits = [...arrayFruits, objFruits];
      
      
   }



   fruitsHTML();

}

function removeFruit(e){

    if(e.target.classList.contains('remove-btn')){

        const idFruittoRemove = e.target.getAttribute('data-id');

        arrayFruits = arrayFruits.filter( fruit => fruit.idFruit !== idFruittoRemove);

        
    }

    fruitsHTML();

}

function fruitsHTML() {


    cleanBasket();

    //Navigate throught array
    arrayFruits.forEach( fruit => {

         const {nameFruit, idFruit, quantity} = fruit;
         

         //Create Row to show in "Your Basket"
         const rowHTML = document.createElement('tr');

         rowHTML.innerHTML = `

            <td>
                  
              ${nameFruit}
               
            </td>

            <td>
                  
              ${quantity}
               
            </td>

            <td>

              <span class="remove-btn" data-id="${idFruit}"> X </span>


            </td>
         
         
         `

         basketItemsHTML.appendChild(rowHTML);

    } )
}


function cleanBasket(){

    while (basketItemsHTML.firstChild){

        basketItemsHTML.removeChild(basketItemsHTML.firstChild);
    }
}
