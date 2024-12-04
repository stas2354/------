document.getElementById('submitButton').addEventListener('click', function() {
    let isValid = true;
    let errorDiv = document.getElementById("error");
    errorDiv.textContent = "";
  
    const id = document.getElementById('Id').value.trim();
    const password = document.getElementById('Pwd').value.trim();
    const passwordConfirm = document.getElementById('Pwd1').value.trim();
  
    if (id === "") {
      errorDiv.textContent += "Идентификатор не может быть пустым.\n";
      isValid = false;
    }
    if (password === "") {
      errorDiv.textContent += "Пароль не может быть пустым.\n";
      isValid = false;
    }
    if (password !== passwordConfirm) {
      errorDiv.textContent += "Пароли не совпадают.\n";
      isValid = false;
    }
  
    if (isValid) {
      alert("Вас зарегистрировали\nID=" + id + "\nPassword=" + password);
      // Здесь можно добавить сохранение данных в localStorage или отправку на сервер
    }
  });