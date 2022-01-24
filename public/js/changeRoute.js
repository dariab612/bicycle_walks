document.changeForm?.addEventListener('submit', async (event) => {
  console.log('hi!')
  event.preventDefault();

  const { routeName, routeDesc, routeCord1, routeCord2, action } = event.target;
  console.log(event.target.action);
  const response = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      routeName: routeName.value,
      routeDesc: routeDesc.value,
      routeCord1: routeCord1.value,
      routeCord2: routeCord2.value
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
