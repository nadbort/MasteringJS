//Variables
const results = document.querySelector('#results');

const typeAnimal = document.querySelector('#type');
const color = document.querySelector('#color');
const personality = document.querySelector('#personality');


//Object with search criteria

const searchCriteria = {
   
    type: '',
    color: '',
    personality: ''

}



//Events
document.addEventListener('DOMContentLoaded', () => {
    
    displayPetsHTML(pets);

});


typeAnimal.addEventListener( 'change', e => {
    
     searchCriteria.type = e.target.value;
     filterPet();

} );


color.addEventListener( 'change', e => {
    
     searchCriteria.color = e.target.value;
     filterPet();

} );


personality.addEventListener( 'change', e => {
    
     searchCriteria.personality = e.target.value;
     filterPet();

} );

//Functions

function displayPetsHTML(pets){

    cleanHTML();

    pets.forEach( pet => {

       const { name, type, color, personality } = pet;

       const infoPet = document.createElement('p');
       infoPet.textContent = `
          
         ${name}-${type}-${color}-${personality} 
       
       `

       results.appendChild(infoPet);

    }  )
}


function cleanHTML(){

    while(results.firstChild){

        results.removeChild(results.firstChild);

    }
}


function filterPet(){

    cleanHTML();
    
    const result = pets.filter(filterType).filter(filterColor).filter(filterPersonality);


    //Display message if we dont have any matches

    if(result.length){


        displayPetsHTML(result);


    }else{
       
        const noMatchesMessage = document.createElement('p');

        noMatchesMessage.textContent = "No friends found :(";


        results.appendChild(noMatchesMessage);
         
    }

    

}


function filterType(pet) {


    if(searchCriteria.type){

        return searchCriteria.type === pet.type;
    }

    return pet;

}


function filterColor(pet) {
    

    if(searchCriteria.color){

        return searchCriteria.color === pet.color;
    }

    return pet;

}


function filterPersonality(pet) {
   
    if(searchCriteria.personality){

        return searchCriteria.personality === pet.personality;
    }

    return pet;

}