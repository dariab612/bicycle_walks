const routes = document.querySelectorAll('.routes');

const deleteButton = document.getElementById('#deleteButton')

for (let i = 0; i < routes.length; i += 1) {
  if (routes[i].id === deleteButton) {
    routes[i].addEventListener('click', async (event) => {
      const response = await fetch(`/routes/${event.target.id}`, {
        method: 'DELETE',
      });

      const jsonResponse = await response.json();

      if (jsonResponse. === true) {
        alert(jsonResponse.message);
        window.location.href = '/';
      } else {
        alert(jsonResponse.message);
      }
    });
  }
}
