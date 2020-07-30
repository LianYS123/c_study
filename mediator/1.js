//中介者模式


class Player {
  constructor(name, team) {
    this.name = name;
    this.team = team;
    this.state = "alive";
  }
  win() {
    console.log(this.name + "won");
  }
  lose() {
    console.log(this.name + "lost");
  }
  die() {
    this.state = "dead";
    PlayerDirector.reciveMessage("playerDead", this);
  }
}

//工厂
const playerFactory = (name, team) => {
  const player = new Player(name, team);
  PlayerDirector.reciveMessage("addPlayer", player);
  return player;
};

//中介者
class PlayerDirector {
  static players = {};
  static addPlayer(player) {
    const team = player.team;
    if (!this.players[team]) {
      this.players[team] = [];
    }
    this.players[team].push(player);
  }
  static removePlayer(player) {
    const { team } = player.team;
    this.players[team] = this.players[team].filter((p) => p !== player);
  }
  static reciveMessage(msg, ...args) {
    this[msg](...args);
  }
  static playerDead(player) {
    const { team } = player;
    const teamPlayers = this.players[team];
    if (teamPlayers.every(({ state }) => state === "dead")) {
      teamPlayers.forEach((player) => player.lose());
      Object.keys(this.players)
        .filter((t) => t !== team)
        .forEach((team) =>  this.players[team].forEach((player) => player.win()));
    }
  }
}

const player1 = playerFactory('111', 'red');
const player2 = playerFactory('222', 'red');
const player3 = playerFactory('333', 'red');
const player4 = playerFactory('444', 'red');

const player5 = playerFactory('555', 'blue');
const player6 = playerFactory('666', 'blue');
const player7 = playerFactory('777', 'blue');
const player8 = playerFactory('888', 'blue');

player1.die()
player2.die()
player3.die()
player4.die()