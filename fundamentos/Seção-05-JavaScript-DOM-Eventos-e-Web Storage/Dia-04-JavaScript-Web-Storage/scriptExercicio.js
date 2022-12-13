const changeColorFundo = () => {
  const bnts = document.getElementsByClassName('div-chose');
  const text = document.getElementById('text');

  for (let index = 0; index < bnts.length; index += 1) {
    bnts[index].addEventListener('click', (event) => {
      text.classList.add(event.target.classList);

      localStorage.setItem('texto', JSON.stringify(text.classList.value));
    });
  }
};
changeColorFundo();

if (localStorage.texto) {
  const text = document.getElementById('text');
  let storageTarget = JSON.parse(localStorage.getItem('texto'));
  text.className = storageTarget;
}
