document.registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const body = {
    username: event.target.login.value,
    email: event.target.email.value,
    password: event.target.password.value,
  };
  const passwordPrep = event.target.passwordPrep.value;
  const password = event.target.password.value;

  if (passwordPrep === password) {
    if (password.value.length > 5) {
      const response = await fetch('/registration', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jsonResponse = await response.json();

      if (jsonResponse. === true) {
        alert('Успешная регистрация');
        window.location.href = '/';
      } else {
        alert('Регистрация не удалась');
      }
    } else {
      alert('Пароль должен содержать не менее 6 символов')
    }
  } else {
    alert('Пароли не совпадают')
  }

});
