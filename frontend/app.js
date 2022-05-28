var socket = io("http://localhost:3030");
// @feathersjs/client is exposed as the `feathers` global.
var app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());

const gamesService = app.service("games");

function appendGame(game) {
  const gamesContainer = document.getElementById("gamesContainer");

  const div = document.createElement("div");
  div.innerHTML = game.title;

  div.classList =
    "w-fit px-12 py-6 text-xl rounded-md border border-white hover:bg-white hover:text-blue-600 cursor-pointer";

  div.onclick = deleteGame;

  div.setAttribute("id", game._id);

  gamesContainer.append(div);
}

async function deleteGame(ev) {
  //   console.log("delete");
  //   console.log(ev.srcElement.id);
  const id = ev.srcElement.id;
  let res = await gamesService.remove(id);
  console.log(res);

  const gameDiv = document.getElementById(id);
  gameDiv.remove();
}

async function createNewGame() {
  const gameTitle = document.getElementById("game-title");
  //   console.log(gameTitle.value);

  let res = await gamesService.create({ title: gameTitle.value });
  console.log(res);

  let game = res;

  appendGame(game);
  gameTitle.value = "";
}

async function getGames() {
  let res = await gamesService.find();
  let games = res.data;
  //   console.log(games);

  games.forEach((game) => appendGame(game));
}

getGames();
