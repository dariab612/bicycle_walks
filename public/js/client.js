document.login.addEventListener('submit', async (event) => {
  event.preventDefault();
  // console.log(event.target.login.value);
  const body = {
    name: event.target.name.value,
    password: event.target.password.value,
  };

  const response = await fetch('/authentication', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const jsonResponse = await response.json();
  if (jsonResponse.createUser === true) {
    alert('Успешный вход!');
    window.location.href = '/';
  } else {
    alert('Такого пользователя не существует');
  }
});
