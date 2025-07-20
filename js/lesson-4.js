// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// 1
const bodyElem = document.body;
console.dir(bodyElem);

// 2
const titleElem = document.querySelector('#title');
console.dir(titleElem);

// 3
const listElem = document.querySelector('.list');
console.dir(listElem);

// 4
const itemsElem = document.querySelectorAll('[data-topic]');
console.log(itemsElem);

// 5
const firstItemElem = itemsElem[0];
console.dir(firstItemElem);

//6
const lastElem = itemsElem[itemsElem.length - 1];
console.dir(lastElem);

//7
const nextelement = titleElem.nextElementSibling;
console.log(nextelement);

// 8
const allTitles = document.querySelectorAll('h3');
console.dir(allTitles);

// 9
const addClass = allTitles.forEach(title => {
  title.classList.add('active');
});

// 10
const liElem = document.querySelector('li[data-topic="navigation"]');
console.dir(liElem);

//11
liElem.style.backgroundColor = 'yellow';

//12
liElem.lastElementChild.textContent = 'я змінив тут текст';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const topicElem = document.querySelector(`[data-topic=${currentTopic}]`);
console.dir(topicElem);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicElem.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedEl = document.querySelector('.completed');

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedEl.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const paragraphEl = document.createElement('p');
paragraphEl.textContent = "Об'єктна модель документа (Document Object Model)";

titleElem.after(paragraphEl);

// 18 - додай новий елемент списку у кінець списка, його заголовок це -
// "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const markup = `<li>
    <h3>"Властивість innerHTML"</h3>
    <p>
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
    </p>
</li>`;

listElem.innerHTML += markup;

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

listElem.insertAdjacentHTML('beforeend', markup);

// 20 - очисти список

listElem.innerHTML = '';

//
listElem.innerHTML += markup;

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/
