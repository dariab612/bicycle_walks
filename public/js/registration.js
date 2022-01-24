document.registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log('OKOKOK');
  const body = {
    username: event.target.username.value,
    email: event.target.email.value,
    password: event.target.password.value,
  };
  console.log(body);
  const passwordRep = event.target.passwordRep.value;
  const password = event.target.password.value;

  if (passwordRep === password) {
    const response = await fetch('/registration', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonResponse = await response.json();
    if (jsonResponse.createUser === true) {
      alert('Успешная регистрация');
      window.location.href = '/';
    } else {
      alert('Регистрация не удалась');
    }
  } else {
    alert('Пароли не совпадают!');
  }
});
