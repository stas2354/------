
document.querySelectorAll('.navigation__item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function validateContactForm() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    const errorDiv = document.getElementById('contactErrors');

    let errors = [];
    if (name.trim() === '') errors.push("Пожалуйста, введите ваше имя.");
    if (email.trim() === '' || !isValidEmail(email)) errors.push("Пожалуйста, введите корректный адрес электронной почты.");
    if (message.trim() === '') errors.push("Пожалуйста, введите сообщение.");

    errorDiv.innerHTML = ''; // Очищаем предыдущие ошибки
    if (errors.length > 0) {
        errors.forEach(error => {
            let p = document.createElement('p');
            p.textContent = error;
            errorDiv.appendChild(p);
        });
        return false; 
    }

    return true; 
}



function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

