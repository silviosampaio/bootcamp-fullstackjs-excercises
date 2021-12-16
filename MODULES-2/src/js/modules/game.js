import Snake from "./snake.js";
import Feed from "./feed.js";

let Game = {
  score: 0,
  pontuation: 5,
  direction: "right", // up, left, down, right
  speed: 5,
  core: null,
  ground: {
    x: 500,
    y: 500,
  },
  snake: {
    size: 25,
    x: 0,
    y: 0,
  },
  feed: {
    size: 25,
    x: 0,
    y: 0,
  },
  setProps: (props) => {
    Object.keys(props).map((key) => {
      Game[key] = props[key];
    });
  },
  checkGameOver: () => {
    const { snake, ground, core } = Game;
    const minGround = 0;

    if (
      snake.x < minGround ||
      snake.x > ground.x - snake.size ||
      snake.y < minGround ||
      snake.y > ground.y - snake.size
    ) {
      alert("VOCÊ PERDEU");
      clearInterval(core);
      return false;
    }
  },
  checkColision: () => {
    const { snake, feed } = Game;

    const isCollide = !(
      snake.y + snake.size < feed.y ||
      snake.y > feed.y + feed.size ||
      snake.x + snake.size < feed.x ||
      snake.x > feed.x + feed.size
    );

    if (isCollide) {
      Feed.add();
      Game.updateScore();
      Game.updateSpeed();
    }
  },
  updateScore: () => {
    const { score, pontuation } = Game;
    const newScore = score + pontuation;

    const $score = document.getElementById("score");
    $score.innerText = `Pontuação: ${newScore}`;

    Game.score = newScore;
  },
  updateSpeed: () => {
    let { speed } = Game;
    speed += 1;

    const $speed = document.getElementById("speed");
    $speed.innerText = `Velocidade: ${speed}`;

    Game.speed = speed;
  },
};

// FUNCTIONS
export const start = () => {
  Feed.add();
  Game.core = setInterval(() => {
    Snake.move();
  }, 50);
  document.addEventListener("keydown", (event) => {
    Snake.updateDirection(event.key);
  });
};

export default Game;
