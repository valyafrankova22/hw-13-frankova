mathElevate();

function mathElevate(userNum1, userNum2 = 1) {
    userNum1 = prompt(`Введите число`);
    userNum2 = prompt(`Введите степень`);
    let result;

    if (userNum1 === null || userNum2 === null) {
        return alert(`error: вы ничего не ввели`);
    } else if (userNum1 === `` || userNum2 === ``) {
        return alert(`error: вы оставили строку пустой`);
    } else if (isNaN(+userNum1) || isNaN(+userNum2)) {
        return alert(`error: вы ввели не число`);
    } else {
        return alert(userNum1 ** userNum2);
    }
}
 console.log(mathElevate());





/*
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
*/




