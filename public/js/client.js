document.login.addEventListener('submit', async (event) => {
  event.preventDefault();
  // console.log(event.target.login.value);
  const body = {
    login: event.target.login.value,
    password: event.target.password.value,
  };

  const response = await fetch('/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const jsonResponse = await response.json();
  if (jsonResponse.authenticated === true) {
    alert('Успешный вход!');
    window.location.href = '/';
  } else {
    alert('Ошибка входа.');
  }
});
