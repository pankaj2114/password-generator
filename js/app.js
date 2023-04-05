


const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*90=+-";



//selectors

const passBox = document.getElementById('password-box');
const totalCharacter = document.getElementById('length');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');



/// to generate the random value
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}



//to generate the password
const generatePassword = (pasword = "") => {
    if (upperCase.checked) {
        pasword += getRandomData(upperSet);
    }
    if (lowerCase.checked) {
        pasword += getRandomData(lowerSet);
    }
    if (number.checked) {
        pasword += getRandomData(numberSet);
    }
    if (symbol.checked) {
        pasword += getRandomData(symbolSet);
    }
    if (pasword.length < totalCharacter.value) {
        return generatePassword(pasword);
    }
    passBox.innerText = truncateString(pasword, totalCharacter.value);
    // console.log(truncateString(pasword, totalCharacter.value));
}


// generatePassword();

/// for the button action
document.getElementById('btn').addEventListener(
    "click",
    function () {
        generatePassword();
    }
)





// to generate the string according total character checked
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.slice(0, num);
        return subStr;
    } else {
        return str;
    }
}