<?php
	$msg = "";

	if (isset($_GET) && $_GET['action'] == "Регистрация") {
		if ($_POST["password"] != $_POST['enterPassword']) {
			$msg = "Пароли не совпадают";
		} else {
			$mysqli = new mysqli("localhost", "root", "", "db_great_museums_async");

			$login_sql = "SELECT * FROM `users` WHERE `login` = '{$_POST['login']}'";

			$login_res = $mysqli->query($login_sql);

			if ($login_res->num_rows) {
				$msg = "Пользователь с таким логином уже существует";
			} else {
				$stmt = $mysqli->prepare("INSERT INTO `users` (`id`, `login`, `password`, `salt`, `email`, `role`) VALUES (NULL, ?, ?, ?, ?, ?)");

				$stmt->bind_param("sssss", $login, $pwd, $salt, $email, $role);

				$login = $_POST['login'];
				$salt = str_shuffle("0123456789");
				$pwd = crypt($_POST["password"], $salt);
				$_POST["email"] ? $email = $_POST['email'] : $email = "";
				$role = "Пользователь";

				if (!$stmt->execute()) {
					$msg = "Ошибка записи пользователя"; 
				}
			}
		}

		$json = json_encode(["msg" => $msg]);
		print_r($json);
	}
?>