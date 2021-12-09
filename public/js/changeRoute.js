document.changeForm?.addEventListener('submit', async (event) => {
  console.log('hi!')
  event.preventDefault();

  const { routeName, routeDesk, routeCord, action } = event.target;
  const response = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      routeName: routeName.value,
      routeDesk: routeDesk.value,
      routeCord: routeCord.value
    }),
  })

  const jsonResponse = await response.json();
  if (jsonResponse.changeRoute === true) {
    alert('Успешное изменение маршрута');
    window.location.href = '/user_page';
  }
  else {
    alert('Маршурт изменить не удалось');
  }
})
