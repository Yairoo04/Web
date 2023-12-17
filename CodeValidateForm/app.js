var input = document.querySelector('.formInput input');
var eye = document.querySelector('.formInput i');
var lowerCase = document.querySelector('.lowerCase');
var upperCase = document.querySelector('.upperCase');
var number = document.querySelector('.number');
var symbol = document.querySelector('.symbol');
var characters = document.querySelector('.characters');

eye.addEventListener('click', function() {
    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
    }
    else {
        input.setAttribute('type', 'text')
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
})

input.addEventListener('input', function() {
    let val = this.value;
    /[a-z]/.test(val) ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid');
    /[A-Z]/.test(val) ? upperCase.classList.add('valid') : upperCase.classList.remove('valid');
    /[0-9]/.test(val) ? number.classList.add('valid') : number.classList.remove('valid');
    /[\W]/.test(val) ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    val.length >= 8 ? characters.classList.add('valid') : characters.classList.remove('valid');
})