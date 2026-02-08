//Constructor Shipping
function Shipping(zone, weight, speed){

    this.zone = zone;
    this.weight = weight;
    this.speed = speed;

}


Shipping.prototype.calculateShipping = function(){

    let baseRate = 10;
    let quantity;

    switch(this.zone){

        case 'A':
          quantity = baseRate * 1;
          break;
        
        case 'B':
         quantity = baseRate * 1.5;
         break;
        
        case 'C':
          quantity = baseRate * 2;
          break;

        default:
          break;

    }

    if(this.weight > 1) {
        
        //Calculate extra weight 
        const extraWeight = this.weight - 1;

        //Multiply extra weight x 5
        quantity += (extraWeight * 5);
    
    }

    if(this.speed === 'express'){

        quantity += (quantity * 0.2);
    }

    return quantity;



}
//Class UI

function UI(){};


UI.prototype.uiResults = function(totalQuantity, shippingDetails){

      const {zone, weight, speed} = shippingDetails;


      const div = document.createElement('DIV');

      div.classList.add('result-box');

      div.innerHTML = `
          

        <p class="header">Your resume</p>


        <p class="font-bold"> Zone: <span class="font-normal"> ${zone} </span> </p>
        <p class="font-bold"> Weight: <span class="font-normal"> ${weight} </span> </p>
        <p class="font-bold"> speed: <span class="font-normal"> ${speed} </span> </p>
        <p class="font-bold"> Total: <span class="font-normal"> $ ${totalQuantity} </span> </p>
      
      `

      const resultBox = document.querySelector('#result');

      resultBox.appendChild(div);


}


UI.prototype.uiMessages = (message, type) => {

    const div = document.createElement('DIV');
   
   if(type === 'error'){

       div.classList.add('error');

   }else{

      div.classList.add('success');
   }

   div.classList.add('message');

   div.textContent = message;

   const formShipping = document.querySelector('#shipping-form');

   formShipping.appendChild(div);

   setTimeout( () => {

      div.remove();

   }, 3000 )

}



//Register Events

EventsRegister();
function EventsRegister() {

    document.addEventListener('DOMContentLoaded', () => {

        console.log('Estoy listo');
    })


    const formShipping = document.querySelector('#shipping-form');

    formShipping.addEventListener('submit', quoteShipping)



}

const ui = new UI();

function quoteShipping(e){


    e.preventDefault();
    
    //Read Data from shipping form
    const zoneSelect = document.querySelector('#zone').value;
    
    const weightItem = document.querySelector('#weight').value;

    const deliverySpeed = document.querySelector('input[name="speed"]:checked').value;


    console.log(deliverySpeed);


    //Check if any field is empty

    if(zoneSelect === '' || weightItem === '' || deliverySpeed === ''){


        ui.uiMessages('All fields are required', 'error');
        return;
    }
     
    //If pass validation make this
    ui.uiMessages('Quote in progress...', 'success');

    const shipping = new Shipping(zoneSelect, weightItem, deliverySpeed);

    const total = shipping.calculateShipping();

    ui.uiResults(total, shipping);
    
    

}

