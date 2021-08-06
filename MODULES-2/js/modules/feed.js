import Game from './game.js';

const Feed = {
  add: () => {
    Feed.remove();

    const { ground, feed } = Game;
    const $gameGround = document.getElementById('game');

    const randomX = Math.ceil(Math.random() * ground.x) - feed.size;
    const randomY = Math.ceil(Math.random() * ground.y) - feed.size;

    const x = randomX < 500 ? randomX : ground.x - feed.size;
    const y = randomY < 500 ? randomX : ground.y - feed.size;

    //updatePosition('feed', { x, y });
    Game.setProps({
      feed: {
        ...Game['feed'],
        ...{ x, y },
      },
    });

    const $feed = document.createElement('div');
    $feed.style.width = feed.size + 'px';
    $feed.style.height = feed.size + 'px';
    $feed.style.backgroundColor = 'red';
    $feed.style.position = 'relative';
    $feed.id = 'feed';
    $feed.style.top = y + 'px';
    $feed.style.left = x + 'px';

    $gameGround.append($feed);
  },
  remove: () => {
    const $feed = document.getElementById('feed');
    if ($feed) {
      $feed.remove();
    }
  },
};

export default Feed;
