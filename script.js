const input = document.getElementById("passwordLengthSlider"),
    number = document.querySelector(".number")

input.addEventListener("input",() => {
    number.textContent = input.value;
})

    document.getElementById('generateButton').onclick = function(){

    function generatePassword(length, includeLowercase, includeUppercase,includeNubers, includeSymbols){

        const lowecaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()'.,-_+=";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowecaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNubers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars: "";

        if(length <= 0){
            return 'Drag the slider to select password length';
        }
        if(allowedChars.length === 0){
            return 'Select at least one password format';
        }

        for(let i= 0; i<length; i++){
                const radomIndex = Math.floor(Math.random()*allowedChars.length);
                password += allowedChars[radomIndex];
        }

        return password;
    }

    let result = document.getElementById('result')

    let lowerCase = document.getElementById("includeLowercase");
    let upperCase = document.getElementById("includeUppercase");
    let numbers = document.getElementById("includeNumbers");
    let symbols = document.getElementById("includeSymbols");

    const passwordLength = input.value;
    let includeLowercase;
        if(lowerCase.checked == true){
            includeLowercase = true;
        }else{
            includeLowercase = false;
        }
    let includeUppercase = true;
        if(upperCase.checked == true){
            includeUppercase = true;
        }else{
            includeUppercase = false;
        }
    let includeNubers = true;
        if(numbers.checked == true){
            includeNubers = true;
        }else{
            includeNubers = false;
        }
    let includeSymbols = true;
        if(symbols.checked == true){
            includeSymbols = true;
        }else{
            includeSymbols = false;
        }
    
    const password = generatePassword(passwordLength,
                                        includeLowercase,
                                        includeNubers,
                                        includeUppercase,
                                        includeSymbols);

result.innerText = (`${password}`);
}


