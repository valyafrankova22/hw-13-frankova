function isValidNumber (arg) {
    if   (typeof arg === "number" && !isNaN(arg)) {
        return true;
    }
    return false;
}

function mathPower(userNum1, userNum2 = 1) {
    if (isValidNumber(userNum1)) return `userNum1 is not valid`;
    if (isValidNumber(userNum2)) return `userNum2 is not valid`;

    return alert(Math.pow(userNum1, userNum2));
}

mathPower(prompt(`Введите число`), prompt(`Введите степень`));
console.log(mathPower());



