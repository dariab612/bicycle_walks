document.createRoute?.addEventListener('submit',async (event) => { // async
  event.preventDefault();
  console.log('перехвачено');
  // console.log(event.target);
  const body = {
    nameRoute: event.target.nameRoute.value,
    description: event.target.description.value,
    coordinates_1: event.target.coordinates_1.value,
    coordinates_2: event.target.coordinates_2.value,
  };
console.log(body);
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


// console.log(body.coordinates);

// if (body.nameRoute === )
});
