// 1. Калькулятор
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Деление на ноль!" : a / b);

// 2. Проверка условий
const checkCondition = function(value, condition) {
  switch (condition) {
    case 'even': return value % 2 === 0;
    case 'positive': return value > 0;
    case 'greaterThan10': return value > 10;
    default: return false;
  }
};

// 3. Проверка на палиндром
const isPalindrome = (surname) => {
  const cleanedSurname = surname.toLowerCase().replace(/[^a-zа-я]/g, '');
  return cleanedSurname === cleanedSurname.split('').reverse().join('');
};

// 4. Среднее значение массива
const average = (arr) => arr.reduce((sum, val) => sum + val, 0) / arr.length;

// 5. Дни до нового года
const daysToNewYear = () => {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// 6. Пустая стрелочная функция
const emptyFunction = () => {};

// 7. Операции над массивом
const numbers = [1, 2, 3, 4, 5, 6];
const sum = (arr) => arr.reduce((sum, num) => sum + num, 0);
const evenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const multiplyByTwo = (arr) => arr.map(num => num * 2);


// 8. Фильтр e-mail (требует HTML-файла)
//  Этот код нужно разместить в `<script>` теге вашего HTML файла
//  (смотрите пример HTML в предыдущем ответе)

const emails = ["test1@example.com", "test2@example.com", "another@mail.com", "test3@example.com"];

// Функция рендеринга списка email в HTML:
function renderEmails(emailsArray) {
    const emailList = document.getElementById('emailList');
    emailList.innerHTML = ''; // Очищаем список перед рендерингом
    emailsArray.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        emailList.appendChild(li);
    });
}

// Функция фильтрации email:
function filterEmails(filterText) {
    const filteredEmails = emails.filter(email => email.toLowerCase().includes(filterText.toLowerCase()));
    renderEmails(filteredEmails);
}

// Прикрепление обработчика к полю ввода:
document.getElementById('emailFilter').addEventListener('input', () => filterEmails(document.getElementById('emailFilter').value));

// Первоначальный рендеринг:
renderEmails(emails);


// Вывод результатов в консоль (для проверки):

console.log("Калькулятор:");
console.log("Сложение:", add(5, 3));
console.log("Вычитание:", subtract(10, 4));
console.log("Умножение:", multiply(7, 2));
console.log("Деление:", divide(15, 3));
console.log("Деление на ноль:", divide(10, 0));

console.log("\nПроверка условий:");
console.log("8 - четное:", checkCondition(8, 'even'));
console.log("5 - положительное:", checkCondition(5, 'positive'));
console.log("12 > 10:", checkCondition(12, 'greaterThan10'));

console.log("\nПалиндром:");
console.log("А роза упала на лапу Азора:", isPalindrome("А роза упала на лапу Азора"));
console.log("Ivanov:", isPalindrome("Ivanov"));

console.log("\nСреднее значение массива:", average([1, 2, 3, 4, 5]));

console.log("\nДни до Нового года:", daysToNewYear());

console.log("\nПустая функция:", emptyFunction());

console.log("\nОперации над массивом:");
console.log("Сумма:", sum(numbers));
console.log("Четные числа:", evenNumbers(numbers));
console.log("Умножение на 2:", multiplyByTwo(numbers));