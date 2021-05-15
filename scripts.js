const gameList = [
  {
    gametitle: 'Tetris',
    systemname: 'Game Boy',
    pricepayed: '7',
    valuedprice: '9',
    storename: 'Ebay',
  },
  {
    gametitle: 'Ms. Pac-Man',
    systemname: 'Sega Genesis',
    pricepayed: '10',
    valuedprice: '6',
    storename: 'Slackers',
  },
];

const tbody = document.querySelector('tbody');
const template = document.querySelector('template');
const valuedpricedisplay = document.getElementById('tvp');
const pricepayeddisplay = document.getElementById('tpp');

function render() {
  tbody.innerText = ''; // This part here will prevent the table from duplicating items already displayed in the table.
  valuedpricedisplay.innerText = '';
  pricepayeddisplay.innerText = '';
  gameList.forEach(game => {
    const newRow = template.content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = game.gametitle;
    tds[1].innerText = game.systemname;
    tds[2].innerText = `$${game.pricepayed}`;
    tds[3].innerText = `$${game.valuedprice}`;
    tds[4].innerText = game.storename;
    tbody.appendChild(newRow);
  });
}
render();

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  gameList.push({
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

document.getElementById('reset-button').addEventListener('click', () => {
  gameList.length = 0;
  render();
});
