document.createRoute?.addEventListener('submit',async (event) => { // async
  event.preventDefault();
  console.log('перехвачено');
  // console.log(event.target);
  const body = {
    nameRoute: event.target.nameRoute.value,
    description: event.target.description.value,
    coordinates: event.target.coordinates.value,
  };

  const response = await fetch('/createRoute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const jsonResponse = await response.json();
  console.log(jsonResponse);
if (jsonResponse.createRoute === true) {
  alert('Успешное добавление!');
  window.location.href = '/';
} else {
  alert('Ошибка: такой маршрут существует');
}


console.log(body.coordinates);

// if (body.nameRoute === )
});
