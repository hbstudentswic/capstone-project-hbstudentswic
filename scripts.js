function createRow() {
  const gamename = document.querySelector('#game-nam').value;
  const gamesystem = document.querySelector('#game-sys').value;
  const pricepayed = document.querySelector('#price-payed').value;
  const valuedprice = document.querySelector('#valued-price').value;
  const storename = document.querySelector('#store-name').value;

  const table = document.querySelector('table');

  const newRow = table.insertRow(table.rows.length);

  const gnamecell = newRow.insertCell(0);
  const gsystcell = newRow.insertCell(1);
  const ppricecell = newRow.insertCell(2);
  const vpricecell = newRow.insertCell(3);
  const snamecell = newRow.insertCell(4);

  gnamecell.innerHTML = gamename;
  gsystcell.innerHTML = gamesystem;
  ppricecell.innerHTML = pricepayed;
  vpricecell.innerHTML = valuedprice;
  snamecell.innerHTML = storename;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  createRow();
});
