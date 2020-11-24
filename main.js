const validation = (() => {
    const zipCode = (input, target) => {
        switcher(target, !(input.validity.patternMismatch));
    }
    const passwordPattern = (input) => {
        const lettersPattern = /[a-z]/;
        const capitalPattern = /[A-Z]/;
        const digitpattern =  /[0-9]/;
        switcher(document.querySelector('#letter'), (input.value.match(lettersPattern) != null))
        switcher(document.querySelector('#capital'),(input.value.match(capitalPattern) != null))
        switcher(document.querySelector('#number'),(input.value.match(digitpattern) != null))
        switcher(document.querySelector('#length'),(input.value.length >= 8))
    }

    const passwordMatch = (copy, model, target) => {
        switcher(target, (copy.value === model.value));
    };
    const switcher = (triggered, result) => {
        if(result === true) {
            triggered.classList.remove("invalid");
            triggered.classList.add("valid");
          } else {
            triggered.classList.remove("valid");
            triggered.classList.add("invalid");
        }
    }
    return {
        zipCode,
        passwordPattern,
        passwordMatch
    }
})();
const zip = document.querySelector('#zip-code');
const pass = document.querySelector('#password');
const passVer = document.querySelector('#password-verification');
const zipFeedback = document.querySelector('#pattern');
const psswrdMatchFeedback = document.querySelector('#matching');
zip.addEventListener('focusout', () => {
    validation.zipCode(zip, zipFeedback)
});

pass.addEventListener('focusout', () => {
    validation.passwordPattern(pass);
    validation.passwordMatch(passVer, pass, psswrdMatchFeedback)
});
passVer.addEventListener('focusout', () => {
    validation.passwordMatch(passVer, pass, psswrdMatchFeedback);
});