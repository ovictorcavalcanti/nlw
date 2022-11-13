let delay = -0.4;

function createCard(date, day, games) {
  delay += 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
          </div>
    `;
}

function createGame(player1, hour, player2) {
  return `<li>
    <img 
      src="./assets/img/icon-${player1}.svg" 
      alt="Escudo do ${player1}" 
      class="icon" 
    />
    <strong>${hour}</strong>
    <img
      src="./assets/img/icon-${player2}.svg"
      alt="Escudo de ${player2}"
      class="icon"
    />
  </li>`;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  );
