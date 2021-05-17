import gameList from './data.js';

const tbody = document.querySelector('tbody');
const template = document.querySelector('template');
const valuedpricedisplay = document.getElementById('tvp');
const pricepayeddisplay = document.getElementById('tpp');

function render() {
  tbody.innerText = '';
  valuedpricedisplay.innerText = '';
  pricepayeddisplay.innerText = '';
  // Line 9 will clear the tbody when re-rendering the table in order to prevent any table data from duplicating.
  // Line 10 and 11 will clear out the displays of the valued price and the payed price when the table is re-rendered.
  gameList.forEach(game => {
    const newRow = template.content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = game.gametitle;
    tds[1].innerText = game.systemname;
    tds[2].innerText = `$${game.pricepayed}`;
    tds[3].innerText = `$${game.valuedprice}`;
    // Line 19 and 20 are using template literals to add the dollar sign before the number when the price values show up on the table. They are stored in the array as just the number.
    tds[4].innerText = game.storename;
    tbody.appendChild(newRow);
    // Line 23 will apply the new row to the table.
  });
}
render();
// Line 27 is used to display the default "games" in the array on the table when the page loads.

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  gameList.push({
    // Line 32 through 39 will be used to add what the user inputs on the page into the array. After doing this, it calls for the render function to display the contents of the array including the newly added item on the table.
    gametitle: event.target.elements[0].value,
    systemname: event.target.elements[1].value,
    pricepayed: event.target.elements[2].value,
    valuedprice: event.target.elements[3].value,
    storename: event.target.elements[4].value,
  });
  render();
});

document.getElementById('dtpp').addEventListener('click', () => {
  const totalValue = gameList.reduce(
    (total, { pricepayed }) => total + Number(pricepayed),
    0,
  );
  pricepayeddisplay.innerHTML = `$${totalValue}`;
});

document.getElementById('dtvp').addEventListener('click', () => {
  const totalValue = gameList.reduce(
    (total, { valuedprice }) => total + Number(valuedprice),
    0,
  );
  valuedpricedisplay.innerHTML = `$${totalValue}`;
});

// The two event listeners on Line 43 and 51 will run all the items in the array to get a total specific price and display it to the user with the paragraph tag on the page.

document.getElementById('reset-button').addEventListener('click', () => {
  gameList.length = 0; // tutorialspoint
  // Line 62 will empty the contents of the array and thus the table whenever the user clicks the "Reset" button.
  render();
});
