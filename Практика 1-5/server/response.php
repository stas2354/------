<?php
	$par = explode("/", $_GET['par']);

	switch (count($par)) {
		case 1:
			// Формирование строки запроса получения страниц первого уровня
			$sql = "SELECT * FROM `publication` WHERE `page`='$par[0]'";
			break;
		case 2:
			// Формирование строки запроса получения страниц второго уровня
			$sql = "SELECT * FROM `publication` WHERE `page`='$par[0]' AND `category`='$par[1]'";
			break;
	}

	// подключение к серверу СУБД
	$mysqli = new mysqli('localhost', 'root', '', 'db_great_museums_async');

	// выполнение запроса
	$result = $mysqli->query($sql);

	// извлечение из результирующего набора строк в асссоциативный массив
	$row = $result->fetch_all(MYSQLI_ASSOC);

	// упаковываем массив в JSON-формат
	// отправляем ответ клиенту
	echo json_encode($row);
		
	// строка извлечена в массив
	// echo "<pre>";
	// var_dump($row);
	// echo "</pre>";