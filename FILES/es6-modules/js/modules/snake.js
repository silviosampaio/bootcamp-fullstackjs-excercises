import Game from './game.js';

const Snake = {
  move: () => {
    const $snake = document.getElementById('snake');
    const x = parseInt($snake.style.left) || 0;
    const y = parseInt($snake.style.top) || 0;

    switch (Game.direction) {
      case 'up':
        $snake.style.top = y - Game.speed + 'px';
        break;
      case 'right':
        $snake.style.left = x + Game.speed + 'px';
        break;
      case 'down':
        $snake.style.top = y + Game.speed + 'px';
        break;
      case 'left':
        $snake.style.left = x - Game.speed + 'px';
        break;
    }

    Game.checkGameOver($snake);
    Game.checkColision();
    Snake.updatePosition(x, y);
  },
  updatePosition: (x, y) => {
    Game.setProps({
      snake: {
        ...Game.snake,
        x,
        y,
      },
    });
  },
  updateDirection: (direction) => {
    Game.setProps({
      direction: direction.replace('Arrow', '').toLowerCase(),
    });
  },
};

export default Snake;
