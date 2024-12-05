function setSingleFunction() {
    let a_single = document.querySelectorAll("a.article__link_text");

    for (item of a_single) {
        item.addEventListener("click", fnSingleContent);
    }
}

function fnSingleContent() {
    let href = this.getAttribute("href");

	let response = fetch('/server/responseSingle.php?id=' + href, {
		method: 'GET',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	})

    .then(resp => resp.json())

    .then(data => {
        let html, title = "";

        if (data.page == "Живопись") {
            [title, html] = outSinglePainter(data);
        } else {
            [title, html] = fnOutSingleArticle(data);
        }

        document.querySelector("main.container").innerHTML = html;
		document.querySelector(".header__title").innerHTML = title;
    })

	event.preventDefault();
}

// Функция вывода художнка
function outSinglePainter(data) {
    let title, html = "";

    let dates = data.dates.split("/");


    html += `
        <article>
            <div class="article">
                <h2 class="article__title">${data.title}</h2>
                <div class="article__float_left">
                    <img class="article__img" width="500" src="/images/${data.image}"
                        title="${data.title}">
                    <div class="article__info">
                        <p><span><b>Дата рождения:</b> ${dates[0]}</span></p>
                        <p><span><b>Дата смерти:</b> ${dates[1]}</span></p>
                        <p><span><b>Страна:</b> ${data.country}</span></p>
                        <p><b>Работы художника находятся:</b>
                        <ul>
                            ${data.museums}
                        </ul>
                        </p>
                    </div>
                    ${data.text}
                </div>
            </div>
        </article>
    `;


	title = data.category;

	return [title, html];
}

// Функция вывода статьи
function fnOutSingleArticle(data) {
    let title, html = "";

    html += `
        <article>
            <div class="article">
                <h2 class="article__title">${data.title}</h2>
                <div class="article__float_left">
                    <img class="article__img" width="500" src="/images/${data.image}">
                    ${data.text}
                    <div class="article__links">
                        <a href="${data.link}" class="article__link" target="_blank">Смотреть в источнике</a>
                    </div>
                </div>
            </div>
        </article>
    `;


	title = data.category;

	return [title, html];
}