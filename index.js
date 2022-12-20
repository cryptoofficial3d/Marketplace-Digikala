const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const PhoneRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const form = document.getElementById('form')
const formInput = document.getElementById('form-input')
const formerror = document.getElementById('form-error')

form.addEventListener('submit' , (event)=>{
    event.preventDefault()

   const resultOfEmailRegex = emailRegex.test(formInput.value)
   const resultOfPhoneRegex = PhoneRegex.test(formInput.value)
   
    console.log(resultOfEmailRegex || resultOfPhoneRegex)

    if(!(resultOfEmailRegex || resultOfPhoneRegex)){
        formerror.innerHTML = 'لطفا مقداری صحیحی را وارد کنید'
    }else{
        formerror.innerHTML = ''
    }
})