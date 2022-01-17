const form=document.querySelector('.signup-form')
// const username= document.querySelector('#username')
const usernamePattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const feedback= document.querySelector('.feedback')
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const username= form.username.value
   
   if (usernamePattern.test(username)){
        feedback.textContent="Valid email"
        feedback.style.color="green"

   }
   else{
    feedback.textContent="Invalid email";
    feedback.style.color="red"
   }
   
});

form.username.addEventListener('keyup',e=>{
    if (usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    }
    else{
        form.username.setAttribute('class','error');
    }
})

