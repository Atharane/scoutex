let scoutedPlayers = [];

const nameEl = document.getElementById("name-input");
const postEl = document.getElementById("position-input");
const priceEl = document.getElementById("price-input");
const tmLinkEl = document.getElementById("link-input");

const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("ul-el");

addBtn.addEventListener("click", function () {
  let entry = `${nameEl.value} . ${postEl.value} . ${priceEl.value}`;
  scoutedPlayers.push({ key: entry, link: tmLinkEl.value });

  localStorage.setItem("players", JSON.stringify(scoutedPlayers));

  nameEl.value = "";
  postEl.value = "";
  priceEl.value = "";
  tmLinkEl.value = "";

  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < scoutedPlayers.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${scoutedPlayers[i].link}'>
                    ${scoutedPlayers[i].key}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

function loadPlayers() {
  let players = localStorage.getItem("players");
  if (players) {
    scoutedPlayers = JSON.parse(players);
  }
}

loadPlayers();
renderLeads();
