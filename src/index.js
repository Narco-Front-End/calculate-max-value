/*
Я хочу, чтобы была функция, которая будет бесконечно спрашивать пока пользователь не введет слово break или отмена в
окне prompt. Мы должны игнорировать, если пользователь ввел не число, не просчитывать, то есть после некорректного ввода
 снова сразу спрашиваем. Если число, то должны сравнить с прошлым, и оставить максимальное. Когда ввод останавливается,
  мы возвращаем максимальное число из всех введенных.
 */

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */


let iterationStorage = '';

const askMaxNumber = () => {
    let numberStorage = -Infinity;
    while (true) {
        const askANumberFromUser = prompt("Enter a number");
        if (askANumberFromUser === "break" || askANumberFromUser === null) {
            break
        }
        if (isNaN(+askANumberFromUser)) {
            continue;
        }
        iterationStorage += askANumberFromUser + ', '
        numberStorage = Math.max(numberStorage, +askANumberFromUser);
    }
    console.log(numberStorage);
    return numberStorage;

}

askMaxNumber();