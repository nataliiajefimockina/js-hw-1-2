//TASK #1//

function pow(x, n) {

    var result = x;

    if (n > 0) {
        for (var i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }

    if (n < 0) {
        n *=-1;
        for (var i = 1; i < n; i++) {
            result *= x;
        }
        return 1 / result;
    }

    if (n == 0) {
       return 1;
    }
}

try {
    //Promt for X
    var x = prompt('Please enter "X" ');

    if (x === ' ' || !x) {
        throw new Error("X can't be empty");
    }
    if (isNaN(x)) {
        throw new Error('Not a number!');
    }

    //Promt for N
    var n = prompt('Please enter "N" ');

    if (n === ' ' || !n) {
        throw new Error("N can't be empty");
    }
    if (isNaN(x)) {
        throw new Error('Not a number!');
    }

    // console.log( pow(x, n) );
    alert( pow(x, n) );

}catch (e) {
    alert(e);
}


//TASK #2 - Заполняем массив//

var user = [];

function addUserName() {
    var allUser = 5;   // ограничение кол-ва User в масиве//

    for (var i = 0; i < allUser; i++) {
        user[i] = prompt('Add username #'+(i+1)+' to base')
    }
}

addUserName();

// console.log('arr User = ', user);
var enterUser;

while(!enterUser) {
    enterUser = prompt('add Users name');
}

// console.log('enterUser = ', enterUser);

//TASK #2 - Проверяем массив//

i = 0;
var answer;

function userCheck() {
    if (enterUser != user[i]) {
        answer = false;
        i++;
    } else {
        answer = true;
        return;
    }
}

user.some(userCheck);

if (answer == false) {
    alert('Ошибка входа, имя "'+(enterUser)+'" не найдено.');
} else {
    alert((enterUser)+', вы успешно вошли.');
}
