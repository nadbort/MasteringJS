document.addEventListener( 'DOMContentLoaded', function() {

    //Variables
    const inputEmail = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const form = document.querySelector('#login-form');
    const btnSubmit = document.querySelector('button[type="submit"]');
    const spinner = document.querySelector('#spinner')

    const loginData = {

        username: '',
        password: ''
    }


    //Events
    inputEmail.addEventListener('blur', validateFormInputs);
    inputPassword.addEventListener('blur', validateFormInputs);
    
    form.addEventListener('submit', sendingData);


    //Functions

    function sendingData(e) {
        

        e.preventDefault();

        successMessage();

        spinner.classList.remove('hidden');

        //Select success Alert
        const exists = form.querySelector('.success');

        if(exists){

           setTimeout( () => {
               
            exists.remove();
            spinner.classList.add('hidden');

           }, 3000)
        }

    }

    function validateFormInputs(e){
    
        
        //Reset the Alert HTML
        clearAlert(e.target.parentElement);

        

        //Validation if the value is empty
        if(e.target.value.trim() === ''){

            
            //Reset the objet if the user remove the data from input
            loginData[e.target.name] = '';

            loginDataValidation();

            alertMessage(`Your ${e.target.id} it is an invalid value`, e.target.parentElement);
            return;
        }



        //Validation if the email have the right format
        if(e.target.name ==='username' && !validateEmail(e.target.value)){


            //Reset the objet if the user remove the data from input
            loginData[e.target.name] = '';


            loginDataValidation();
            

            alertMessage(`Your email has not the standard format @domain.ext`, e.target.parentElement);
            return;

        }


        if(e.target.name === 'password' && !validatePassword(e.target.value)){


            //Reset the objet if the user remove the data from input
            loginData[e.target.name] = '';


            loginDataValidation();

            alertMessage(`Your password is too short, please set a new password with more than 6 characters`, e.target.parentElement);
            return;
        }
        
        //Adding data dynamically to the objet is each input pass the validation
        loginData[e.target.name] = e.target.value.trim();


        loginDataValidation();


    }


    function loginDataValidation() {
       
         console.log(loginData);

         if(Object.values(loginData).includes('')){

             btnSubmit.classList.add('disabled');
             btnSubmit.disabled = true;

         }else{

              btnSubmit.classList.remove('disabled');
              btnSubmit.disabled = false;


              console.log('He pasado todas las validaciones');

         }



    }
  
    //Display an error message

    function alertMessage(message, reference){
        

        const textAlert = document.createElement('p');
        textAlert.textContent = message;
        textAlert.classList.add('error-msg');


        reference.appendChild(textAlert);

    }

    //Display an success message

    function successMessage(){


        const textAlert = document.createElement('p');
        textAlert.textContent = 'Succesfully logged';
        textAlert.classList.add('success');

        form.appendChild(textAlert);
    }


    function clearAlert(reference){

        const exists = reference.querySelector('.error-msg');

        console.log(exists);

        if(exists){
            exists.remove();
        }

    }


    
    //Function to check if the email is validate

    function validateEmail(email) {

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

        return regex.test(email);


    }


    //Function to check if the password has more than 6 characters

    function validatePassword(password) {
        
        const numberCharacters = password.length;

        if(numberCharacters >= 6){

            return true;

        }else{

            return false;
        }


    }


} )