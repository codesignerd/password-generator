function generatePassword(lenght,includeLowerCase,includeUpperCase,IncludeNumbers,IncludeSymbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*(-)_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerChars : "";
    allowedChars += includeUpperCase ? upperChars : "";
    allowedChars += IncludeNumbers ? numberChars : "";
    allowedChars += IncludeSymbols ? symbolChars : "";

    if (lenght <= 0) {
       return`("Password lenght must be at least 1")`;
    }

    if (allowedChars.length === 0) {
        return `("At least one character must be selected")`;
    }

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const IncludeNumbers = true;
const IncludeSymbols = true;

const generateBtn = document.getElementById("generateBtn");
const passwordDisplay = document.getElementById("passwordDisplay");

generateBtn.addEventListener("click", () => {
    password = generatePassword(
        passwordLenght,
        includeLowerCase,
        includeUpperCase,
        IncludeNumbers,
        IncludeSymbols
        );
    passwordDisplay.textContent = password;
});