const submitBtn = document.querySelector('#submit')
const emailInput = document.querySelector('#email')
const errorMsg = document.querySelector('.error-msg')

function active() {
    if(emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        submitBtn.style.background = "linear-gradient(90deg,#ff527b,#ff6744)"
    } else {
        submitBtn.style.background = "hsl(235, 18%, 26%)"
    }
}

const handleError = (e) => {
    e.preventDefault()
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        emailInput.style.border = '1px solid red'
        emailInput.style.backgroundColor = '#f1c5c5'
        errorMsg.innerHTML = 'Valid email required'
        return false
    } else {
        window.location.href = "success.html";
    }
    emailInput.style.backgroundColor = 'transparent'
    emailInput.style.border = '1px solid #000'
    errorMsg.innerHTML = ''
}
submitBtn.addEventListener('click', handleError)

window.addEventListener('click', (e) => {
    if(e.target.id !== 'submit') {
        emailInput.style.backgroundColor = 'transparent'
        emailInput.style.border = '1px solid #000'
        errorMsg.innerHTML = ''
    }
})