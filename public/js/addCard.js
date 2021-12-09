const addCard = document.querySelectorAll('.addCard');

addCard.forEach((card) => {
  card?.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(event.target)
    const response = await fetch (event.target.dataset.href, {
      method: 'POST',
    });

    const res = await response.json();
    if (res.thisCard){
      alert(res.message)
    } else {
      alert(res.message)
    }

  });
});
