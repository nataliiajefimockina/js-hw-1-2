//TASK #1//

function pow(x, n) {

    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = prompt('Please enter "X" ');
var n = prompt('Please enter "N" ');

console.log( pow(x, n) );

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

var enterUser = prompt('add Users name');

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
