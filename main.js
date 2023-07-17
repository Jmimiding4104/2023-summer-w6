import './assets/scss/all.scss';

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const hamberger = document.querySelector('.header-hamberger-btn').addEventListener(
    "click",
    function(e){
        e.preventDefault();
        const headerHambergerList = document.querySelector('.header-hamberger-list').style.maxHeight;
        if(headerHambergerList == '141px'){
            document.querySelector('.header-hamberger-list').style.maxHeight = "0px";
        }else{
            document.querySelector('.header-hamberger-list').style.maxHeight = "141px";
        }
        
    }
)
