document.login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  // console.log(event.target.login.value);
  const body = {
    email: event.target.email.value,
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
  if (jsonResponse.authUser) {
    alert('Успешный вход!');
    window.location.href = '/';
  } else {
    alert('Такого пользователя не существует');
  }
});
