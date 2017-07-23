let converter = (dollar, val) => {
  return dollar * val;
}

let cards = [...document.querySelectorAll('.card')]; // getting all card in array type
let outputs = [...document.querySelectorAll('.country')];
let values = [0.856910, 0.769447, 17.438174, 3012.856078, 651.206551, 17.617422, 3.142695, 3.142296];

document.querySelector('#dolar-input').addEventListener('input', e => {
  const dollar = e.target.value;
  cards.map( e => e.classList.add('is-visible') ); // iterate of each card adding the class is-visible
  // If the input value is empty we must hide the cards (reactive comportation)
   if (dollar === '' || dollar === null) {
       cards.map( e => e.classList.remove('is-visible')) // iterate of each card removing the class is-visible (to hide it)
   }

  let outputsId = outputs.map(e => e.id); // take each id
   for (let i = 0; i < outputs.length; i++) {
     document.querySelector(`#${outputsId[i]}`).innerHTML = `<p class="textOutput"> ${converter(dollar, values[i])} </p>`;
   }
});
