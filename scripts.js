const gameList = [
  {
    gametitle: 'Tetris',
    systemname: 'Game Boy',
    pricepayed: '$7',
    valuedprice: '$9',
    storename: 'Ebay',
  },
  {
    gametitle: 'Ms. Pac-Man',
    systemname: 'Sega Genesis',
    pricepayed: '$10',
    valuedprice: '$6',
    storename: 'Slackers',
  },
];

const tbody = document.querySelector('tbody');
const template = document.querySelector('template');

function render() {
  gameList.forEach(game => {
    const newRow = template.content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = game.gametitle;
    tds[1].innerText = game.systemname;
    tds[2].innerText = game.pricepayed;
    tds[3].innerText = game.valuedprice;
    tds[4].innerText = game.storename;
    tbody.appendChild(newRow);
  });
}
render();

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
});
