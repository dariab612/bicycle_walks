const user_page = document.location.href

function init(a, b) {
  // Создание карты.
  let myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    zoom: 8,
    controls: []
  });

  ymaps.route([
    a,
    b
  ], {
    mapStateAutoApply: true,
    multiRoute: true,
    routingMode: 'bicycle'
  }).then(function (route) {
    myMap.geoObjects.add(route);

  }, function (error) {
    alert("Возникла ошибка: " + error.message);
  });
}


async function hello() {
  const response = await fetch('/addrouter');
  const jsonResponse = await response.json();
  console.log(jsonResponse);

  ymaps.ready(() => init(jsonResponse.checkRoute.coordinates_1, jsonResponse.checkRoute.coordinates_2))
  // init(jsonResponse.coordinates_1, jsonResponse.coordinates_2)

  // if (mapEl) {
  //   mapEl.remove()
  //   ymaps.ready(init(body.a, body.b))
  // }
  // else { ymaps.ready(init(body.a, body.b)) }
  // console.log(mapEl);
}
console.log(user_page);
if (user_page == 'http://localhost:3000/user') {
  hello()
}



// document.createRoute.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const body = {
//     a: event.target.a.value,
//     b: event.target.b.value,
//   };

//   const response = await fetch('/createRoute', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   const jsonResponse = await response.json();
//   console.log(jsonResponse);

//   //const mapEl = document.getElementById('map').firstElementChild

//   // if (mapEl) {
//   //   mapEl.remove()
//   //   ymaps.ready(init(body.a, body.b))
//   // }
//   // else { ymaps.ready(init(body.a, body.b)) }
//   // console.log(mapEl);
// })

