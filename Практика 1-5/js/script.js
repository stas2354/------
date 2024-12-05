// функция - инициализация событий страницы
function fnIniEvents() {
	// по завершении загрузки DOM выполним:
	document.addEventListener("DOMContentLoaded", function() {
		// 1.-- выбор ссылок навигационного меню
		let a = document.querySelectorAll("nav.header__nav ul.nav__list li.nav__item a");

		// 2.-- перебор ссылок, навешивание на каждую из ссылок события и его обработчика 
		for (item of a) {
			item.addEventListener("click", fnСontentLoader.bind(this, item.getAttribute("href")));
		}

		// 3.-- инициализацию клика по первой ссылке (страница Главная)
		a[0].click();
	})	
} 

// функция - загрузчик контента
function fnСontentLoader(par) {

	// get-запрос к файлу response.php с передачей get-параметра href 
	let response = fetch('/server/response.php?par=' + par, {
		method: 'GET',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	})
	
	// получаем ответ сервера (response.php)
	.then( resp => {
		return resp.json();
	})
	// пробрасываем ответ формата JSON дальше
	.then( data => {
		let html, title = "";

		// если запрос исходит от главной страницы или стрыницы "Города"
		if (data[0].page == "Главная" || data[0].page == "Города" || data[0].page == "Регистрация") {

			[title, html] = fnOutMain(data);

		// если запрос исходит от страницы "Живопись"
		} else if (data[0].page == "Живопись") {
			[title, html] = fnOutPainters(data);
		// иначе 
		} else {

			[title, html] = fnOutPublication(data);
		}

		// вставка заголовка и контента страницы
		document.querySelector(".header__title").innerHTML = title;
		document.querySelector("main.container").innerHTML = html;

		setSingleFunction();
		setTransitionButton();
		setSubmitFunction();
	});

	// предотвращаем переход по ссылке
	event.preventDefault();
}

// функция - добавление кнопкам функцию перехода по страницам
function setTransitionButton() {
	let btns = document.querySelectorAll(".transition_btn");

	for (item of btns) {
		item.addEventListener("click", fnСontentLoader);		
	}
}

// установка формам функции отправки
function setSubmitFunction() {
	let form = document.querySelector("form");

	form ? form.addEventListener("submit", submitData) : null;
}

// функция - отправка данных форм
function submitData() {
	event.preventDefault();

	let formData = new FormData(this);
	let action = this.getAttribute("action");

	fetch("/server/personal.php?action=" + action, {
		method: "POST",
		header: {
			'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		body: formData
	})
	// получаем ответ сервера (personal.php)
	.then( resp => {
		return resp.json();
	})
	// пробрасываем ответ формата JSON дальше
	.then( data => {
		if (data.msg) {
			alert(data.msg);
		} else {
			if (action == "Регистрация") {
				alert("Пользователь успешно зарегистрирован");
				// fnСontentLoader("Вход");
			}
		}
	})
}

// функция - вывод главной страницы
function fnOutMain(data) {
	let title, html = "";

	html = data[0].text;
	title = data[0].category;

	return [title, html];
}

// функция - вывод публикаций (кроме главной страницы)
function fnOutPublication(data) {
	let title, html = "";

	for (item of data) {
		html += `
		<article>
			<div class="article">
				<h2 class="article__title">${item.title}</h2>
				<div class="article__float_left">
					<img class="article__img" width="500" src="/images/${item.image}">
					${item.text}
					<a href="${item.id}" class="article__link_text">[Подробнее...]</a>
					<div class="article__links">
						<a href="${item.link}" class="article__link" target="_blank">Смотреть в источнике</a>
					</div>
				</div>
			</div>
		</article>
		`;
	}

	title = data[0].category;

	return [title, html];
}

// функция - вывод художников
function fnOutPainters(data) {
	let title, html = "";

	for (item of data) {
		let dates = item.dates.split("/");
		
		html += `
		<article>
			<div class="article">
				<h2 class="article__title">${item.title}</h2>
				<div class="article__float_left">
					<img class="article__img" width="500" src="/images/${item.image}"
						title="${item.title}">
					<div class="article__info">
						<p><span><b>Дата рождения:</b> ${dates[0]}</span></p>
						<p><span><b>Дата смерти:</b> ${dates[1]}</span></p>
						<p><span><b>Страна:</b> ${item.country}</span></p>
						<p><b>Работы художника находятся:</b>
						<ul>
							${item.museums}
						</ul>
						</p>
					</div>
					<a href="${item.id}" class="article__link_text">Подробнее...</a>
				</div>
			</div>
		</article>
		`;
	}


	title = item.category;

	return [title, html];
}