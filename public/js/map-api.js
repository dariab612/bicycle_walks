
document.map_route.addEventListener('submit', async (event) => {
  event.preventDefault();
  const body = {
    a: event.target.a.value,
    b: event.target.b.value,
  };

  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);

  const mapEl = document.getElementById('map').firstElementChild

  if (mapEl) {
    mapEl.remove()
    ymaps.ready(init(body.a, body.b))
  }
  else { ymaps.ready(init(body.a, body.b)) }
  console.log(mapEl);
})

function init(a, b) {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 8,
    controls: []
  });

  ymaps.route([
    a,
    b
  ], {
    // Автоматически позиционировать карту.
    mapStateAutoApply: true,
    multiRoute: true,
    routingMode: 'bicycle'
  }).then(function (route) {
    myMap.geoObjects.add(route);
    // button.click(function () {
    //   if (startEditing = !startEditing) {
    //     // Включаем редактор.
    //     route.editor.start({ addWayPoints: true, removeWayPoints: true });
    //     button.text('Отключить редактор маршрута');
    //   } else {
    //     // Выключаем редактор.
    //     route.editor.stop();
    //     button.text('Включить редактор маршрута');
    //   }
    // });
    // route.editor.events.add(["waypointadd", "waypointremove", "start"], function () {
    //   if (route.getWayPoints().getLength() >= 10) {
    //     // Если на карте больше 9 точек маршрута, отключаем добавление новых точек.
    //     route.editor.start({ addWayPoints: false, removeWayPoints: true });
    //   }
    //   else {
    //     // Включаем добавление новых точек.
    //     route.editor.start({ addWayPoints: true, removeWayPoints: true });
    //   }
    // })
  }, function (error) {
    alert("Возникла ошибка: " + error.message);
  });
}

// 'Москва, метро Смоленская',
//       'Метро "Третьяковская'
//==================================

// var control = myMap.controls.get('routePanelControl');

//   // Задание состояния для панели маршрутизации.
//   control.routePanel.state.set({
//     // Адрес начальной точки.
//     from: 'Москва, Льва Толстого, 16',
//     // Адрес конечной точки.
//     to: 'Москва, метро Черемушки'
//   });

//   myMap.events.add('click', async (event) => {
//     const position = await event.get('coords');
//     const hui = await position.json();
//     console.log(hui);
//   })


// let multiRoute = new ymaps.multiRouter.MultiRoute({
//   // Точки маршрута. Точки могут быть заданы как координатами, так и адресом.
//   referencePoints: [
//     'Москва, метро Смоленская',
//     'Москва, метро Арбатская',
//     [55.734876, 37.59308], // улица Льва Толстого.
//   ]
// }, {
//   // Автоматически устанавливать границы карты так,
//   // чтобы маршрут был виден целиком.
//   boundsAutoApply: true
// });

// // Добавление маршрута на карту.
// myMap.geoObjects.add(multiRoute);
