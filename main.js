const validation = (() => {
    const zipCode = (input) => {};
    const passwordPattern = (input) => {};
    const passwordMatch = (copy, model) => {};
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
zip.addEventListener('focusout', (e) => {
    validation.zipCode(e)
});

pass.addEventListener('focusout', (e) => {
    validation.passwordPattern(e);
});
passVer.addEventListener('focusout', (e) => {
    validation.passwordMatch(e, pass);
});